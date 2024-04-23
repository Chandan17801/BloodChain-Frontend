import React from "react";
import last_donations from "@/styles/donations";
import BloodSampleGraph from "./BloodSampleGraph";

function DonationHistory() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="bg-white rounded-lg p-4 shadow-gray-300 shadow-md mont flex-1">
          <div className="flex justify-between mb-4">
            <div className="pl-2 font-semibold self-center">
              Donation History
            </div>
            <div className="text-sm text-red-500 bg-red-100 rounded-md px-4 py-1 cursor-pointer">
              View All &raquo;
            </div>
          </div>
          <div
            className="flex flex-col text-xs"
            style={{ overflowY: "auto", maxHeight: "350px" }}
          >
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
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-gray-300 shadow-md mont flex-1">
          <div className="flex justify-between mb-4">
            <div className="pl-2 font-semibold self-center">
              Donation History
            </div>
            <div className="text-sm text-red-500 bg-red-100 rounded-md px-4 py-1 cursor-pointer">
              View All &raquo;
            </div>
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
          </div>
        </div>
      </div>
      <BloodSampleGraph />
    </div>
  );
}

export default DonationHistory;
