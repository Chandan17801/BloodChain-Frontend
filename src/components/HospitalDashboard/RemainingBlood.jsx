import React, { useEffect, useState } from "react";
import Loading from "../UIElements/Loading";
import axios from "axios";
import { useSelector } from "react-redux";

const bloodGrps = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const RemainingBlood = () => {
  let initialState = [
    { bloodType: "B+", remainingUnits: 3 },
    { bloodType: "B+", remainingUnits: 3 },
    { bloodType: "B+", remainingUnits: 3 },
    { bloodType: "B+", remainingUnits: 3 },
    { bloodType: "B+", remainingUnits: 3 },
    { bloodType: "B+", remainingUnits: 3 },
    { bloodType: "B+", remainingUnits: 3 },
    { bloodType: "B+", remainingUnits: 3 },
  ];

  const [loading, setLoading] = useState(false);
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  const [remainingBloodData, setRemainingBloodData] = useState(initialState);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/hospital/inventory/${userId}`
        );
        // setProfile(response.data);
        console.log(response.data);
        let output = [];
        for (let i = 0; i < 8; i++) {
          let bldgrp = bloodGrps[i];
          if (response.data[bldgrp] != null)
            output.push({
              bloodType: bldgrp,
              remainingUnits: response.data[bldgrp],
            });
          else output.push({ bloodType: bldgrp, remainingUnits: 0 });
        }
        console.log(output);
        setRemainingBloodData(output);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);
  return (
    <>
      {loading && <Loading />}
      <div className="flex-[3] rounded-md shadow-lg shadow-gray-400 bg-white">
        <div className="mont p-4 pb-2 text-[#6a0c3a] font-bold ">
          REMAINING BLOOD
        </div>
        <div className="p-2">
          <div className="flex flex-row gap-2 merri text-sm justify-between items-center rounded-md p-2 px-4 bg-gray-200 border-b-2 border-[#6a0c3a]">
            <div>Blood Type</div>
            <div>Remaining Units</div>
            <div>See Units</div>
          </div>
          <div className="flex flex-col justify-center gap-2 m-2">
            {remainingBloodData.map((data, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center p-4 rounded-md bg-gray-50 shadow-md shadow-gray-300"
              >
                <div className="py-2 px-4 shadow-md shadow-gray-300 rounded-md bg-white mont text-bold text-[#6a0c3a] text-2xl">
                  {data.bloodType}
                </div>
                <div className="merri text-2xl font-thin">
                  {data.remainingUnits}
                </div>
                <div className="text-[#93183f] text-sm underline cursor-pointer mr-2">
                  View
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RemainingBlood;
