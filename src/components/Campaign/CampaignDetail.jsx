import React from "react";

const CampaignDetail = ({ selectedCamp }) => {
  return (
    <div className="flex-[2] flex flex-row rounded-lg shadow-gray-300 shadow-md p-4 bg-white red-creative-2 mont gap-2">
      <div className="flex-1">
        <div className="flex-1">
          <div className="text-red-900 text-3xl p-4 font-bold">
            {selectedCamp?.campaign_name}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-evenly px-4">
          <div className="flex-1 italic">
            {selectedCamp?.campaign_date.substring(0, 10)}
          </div>
          <div className="flex-1 text-lg font-semibold">
            {selectedCamp?.location}
          </div>
        </div>
        <div className="flex-1 px-4">
          Goals: <span>{selectedCamp?.goals}</span>
        </div>
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
      </div>
      <div className="flex-1">
        <div className="font-semibold text-xl pl-2">Collected Samples</div>
        <div
          className=""
          style={{ overflowY: "auto", maxHeight: "190px" }}
        ></div>
      </div>
    </div>
  );
};

export default CampaignDetail;
