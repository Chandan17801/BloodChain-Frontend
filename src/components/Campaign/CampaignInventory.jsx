import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const CampaignInventory = ({ campId, amount }) => {
  // let initialState = {
  //   "O+": 0,
  //   "O-": 0,
  //   "A+": 0,
  //   "A-": 0,
  //   "B+": 0,
  //   "B-": 0,
  //   "AB+": 0,
  //   "AB-": 0,
  // };
  // const [amount, setAmount] = useState(initialState);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response = await axios.get(
  //         process.env.NEXT_PUBLIC_SERVER_URL + `/donation/all/${campId}`
  //       );
  //       // console.log(response.data.bloodDonations);
  //       // eslint-disable-next-line react-hooks/exhaustive-deps
  //       initialState = {
  //         "O+": 0,
  //         "O-": 0,
  //         "A+": 0,
  //         "A-": 0,
  //         "B+": 0,
  //         "B-": 0,
  //         "AB+": 0,
  //         "AB-": 0,
  //       };
  //       response.data.bloodDonations.forEach((donation) => {
  //         if (donation.teststatus === 1) initialState[donation.blood_type]++;
  //       });
  //       // console.log(initialState);
  //       setAmount(initialState);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };
  //   fetchData();
  // }, [campId]);

  // console.log(campId);
  return (
    <div className="flex flex-col flex-1 gap-2 mont">
      <div className="flex gap-2 lex-1">
        {" "}
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["A+"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">A+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["A-"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">A-</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["O+"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["O-"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O-</div>
        </div>
      </div>
      <div className="flex-1 gap-2 flex">
        {" "}
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["AB+"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">AB+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["AB-"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">AB-</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["B+"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">B+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">{amount["B-"]}</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">B-</div>
        </div>
      </div>
    </div>
  );
};

export default CampaignInventory;
