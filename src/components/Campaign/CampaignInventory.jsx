import React from "react";
import axios from "axios";
import { useEffect } from "react";

const CampaignInventory = ({ campId }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `donation/all/${campId}`
        );
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [campId]);

  console.log(campId);
  return (
    <div className="flex flex-col flex-1 gap-2 mont">
      <div className="flex gap-2 lex-1">
        {" "}
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">AB+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
      </div>
      <div className="flex-1 gap-2 flex">
        {" "}
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
          <div className="text-3xl font-semibold">98</div>
          <div className="text-xs text-gray-400">Pouches</div>
          <div className="text-2xl text-red-700 font-semibold">O+</div>
        </div>
      </div>
    </div>
  );
};

export default CampaignInventory;
