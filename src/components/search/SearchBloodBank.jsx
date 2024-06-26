import React from "react";
import axios from "axios";
import { getLatitude } from "@/utils/getCurrentLocation";
import { getLongitude } from "@/utils/getCurrentLocation";
import BloodBank from "@/components/Table/BloodBank";
import { useState, useEffect } from "react";
import Loading from "../UIElements/Loading";
import Loadingg from "../UIElements/Loadingg";
const geolib = require("geolib");

export default function SearchBloodBank() {
  // const initialBanks = [
  //   {
  //     name: "Devanand",
  //     address: "gorakhpur",
  //     email: "meriemail@email.com",
  //     id: "02",
  //   },
  //   {
  //     name: "Devanand",
  //     address: "gorakhpur",
  //     email: "meriemail@email.com",
  //     id: "03",
  //   },
  //   {
  //     name: "Devanand",
  //     address: "gorakhpur",
  //     email: "meriemail@email.com",
  //     id: "01",
  //   },
  //   {
  //     name: "Devanand",
  //     address: "gorakhpur",
  //     email: "meriemail@email.com",
  //     id: "04",
  //   },
  //   {
  //     name: "Devanand",
  //     address: "gorakhpur",
  //     email: "meriemail@email.com",
  //     id: "05",
  //   },
  // ];
  const [distance, setDistance] = useState(50);
  const [bloodbanks, setBloodbanks] = useState([]);
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const latitude = await getLatitude();
        const longitude = await getLongitude();
        if (!latitude || !longitude)
          alert("bhai teri location hi nhi pata mujhe!");
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL +
            `/bloodbank/search?latitude=${latitude}&longitude=${longitude}&radius=${distance}`
        );
        console.log(response.data);
        let banks = [];
        response.data.banks.forEach((bloodbank) => {
          const bloodbankLat = parseFloat(bloodbank.latitude);
          const bloodbankLon = parseFloat(bloodbank.longitude);

          const distance = geolib.getDistance(
            { latitude: latitude, longitude: longitude },
            { latitude: bloodbankLat, longitude: bloodbankLon }
          );
          banks.push({
            ...bloodbank,
            distance,
          });
        });

        setBloodbanks(banks);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [distance]);
  // console.log(bloodbanks);

  const distanceHandler = (e) => {
    setDistance(e.target.value);
  };

  const districtHandler = async (e) => {
    console.log(district);
    try {
      setLoading(true);
      const response = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL + `/bloodbank/district/${district}`
      );
      // console.log(response.data.bloodbank);
      setBloodbanks(response.data.bloodbank);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(bloodbanks);

  return (
    <div className="w-[95%] mx-auto">
      {loading && <Loading />}
      <div>
        <div className="flex">
          <div className="w-1/2 flex p-4 gap-2">
            <select
              onClick={distanceHandler}
              id="myDropdown"
              defaultValue="50"
              className="rounded-md border-gray-400 border-2 p-2 mx-4"
            >
              <option value="10">Less than 10km</option>
              <option value="20">Less than 20km</option>
              <option value="50">Less than 50km</option>
              <option value="10000">Greater than 50km</option>
            </select>
          </div>
          <div className="w-1/2 flex p-4 gap-2 justify-end mr-5+">
            <input
              name="district"
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              type="text"
              placeholder="District.."
              className="rounded-md border-gray-400 border-2 p-2 ml-4"
            ></input>
            <button
              onClick={districtHandler}
              className="px-2 bg-black rounded-sm text-white font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {bloodbanks.length == 0 && (
        <div className="flex justify-center items-center h-[20rem]">
          <h2 className="mont font-semibold text-gray-500 text-xl">
            No Blood Bank found.{" "}
          </h2>
        </div>
      )}
      <BloodBank bloodbanks={bloodbanks} />
    </div>
  );
}
