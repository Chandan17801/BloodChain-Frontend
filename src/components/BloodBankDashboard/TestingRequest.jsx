import React from "react";
import last_donations from "@/styles/donations";


const TestingRequest = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 shadow-md shadow-gray-300">
      <div className="flex justify-between mb-4">
        <div className="pl-2 font-semibold self-start">Donation History</div>
      </div>
      <div className="flex flex-col text-xs">
        <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
          <div>{last_donations[0].date}</div>
          <div>{last_donations[0].address}</div>
        </div>
        <div className="flex justify-between p-4 py-[12px] rounded-md">
          <div>{last_donations[1].date}</div>
          <div>{last_donations[1].address}</div>
        </div>
        <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
          <div>{last_donations[2].date}</div>
          <div>{last_donations[2].address}</div>
        </div>
        <div className="flex justify-between p-4 py-[12px] rounded-md">
          <div>{last_donations[1].date}</div>
          <div>{last_donations[1].address}</div>
        </div>
      </div>
      <div className="text-md text-red-500 bg-red-100 rounded-md px-4 py-2 cursor-pointer w-[48] text-center mt-3">
        View All &raquo;
      </div>
    </div>
  );
};

export default TestingRequest;
