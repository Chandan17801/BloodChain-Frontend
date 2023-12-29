import React from "react";
import axios from "axios";
import { getLatitude } from "@/utils/getCurrentLocation";
import { getLongitude } from "@/utils/getCurrentLocation";
import BloodBank from "@/components/Table/BloodBank";
import { useState, useEffect } from "react";

export default function Search() {
  const initialBanks = [
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "Sudarshan", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "Devanand", address: "bhokal", email: "meriemail@email.com" },
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
  ];
  const [distance, setDistance] = useState(50);
  const [bloodbanks, setBloodbanks] = useState(initialBanks);
  const [district, setDistrict] = useState();
  const latitude = getLatitude();
  const longitude = getLongitude();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       process.env.NEXT_PUBLIC_SERVER_URL +
    //         `/bloodbank/search?latitude=${latitude}&longitude=${longitude}&radius=${distance}`
    //     );
    //     console.log(response.data);
    //     setBloodbanks(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
  }, [distance]);
  console.log(bloodbanks);

  const distanceHandler = (e) => {
    setDistance(e.target.value);
  };

  const districtHandler = async (e) => {4
    console.log(district);
    // try {
    //   const response = await axios.get(
    //     process.env.NEXT_PUBLIC_SERVER_URL +
    //       `/bloodbank/search?latitude=${latitude}&longitude=${longitude}&radius=${distance}`
    //   );
    //   console.log(response.data);
    //   setBloodbanks(response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  console.log(district);


  return (
    <div>
      <form>
        <div className="flex">
          <div className="w-1/2 flex p-4 gap-2">
            <select
              onClick={distanceHandler}
              id="myDropdown"
              className="rounded-md border-gray-400 border-2 p-2 mx-4"
            >
              <option value="Less than 10km" selected>
                Less than 10km
              </option>
              <option value="Less than 20km">Less than 20km</option>
              <option value="Less than 50km">Less than 50km</option>
              <option value="Greater than 50km">Greater than 50km</option>
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
      </form>
      <BloodBank bloodbanks={bloodbanks} />
    </div>
  );
}
