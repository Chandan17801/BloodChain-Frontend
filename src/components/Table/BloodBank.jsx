import React from "react";
import ConfirmPopUp from "../layout/ConfirmPopUp";
import { useState } from "react";

function BloodBank({ bloodbanks }) {
  const [selectedBank, setSelectedBank] = useState(null);
  return (
    <div className="mt-8 w-4/5 mx-auto">
      {selectedBank != null && <ConfirmPopUp bank= {selectedBank} />}
      {bloodbanks.map((bank, index) => (
        <div
          onClick={() => {
            setSelectedBank(bank);
          }}
          key={index}
          className="flex shadow-md shadow-gray-400 p-4 w-[90%] mx-[5%] mb-8"
        >
          <div className="flex flex-col flex-[4]">
            <div className="flex gap-12">
              <div className="font-semibold text-2xl">{bank.name}</div>
              <div className="py-2">10Km</div>
            </div>
            <div className="text-gray-700 py-0 text-sm">{bank.address}</div>
          </div>
          <div className="flex flex-col flex-1">
            <button className="my-4 bg-slate-800 rounded-md text-white text-xl py-1 px-0">
              Send Request
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BloodBank;
