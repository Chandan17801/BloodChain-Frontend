import React from "react";

function BloodBank({ bloodbanks }) {
  return (
    <div>
      {bloodbanks.map((bank, index) => (
        <div
          key={index}
          className="flex shadow-md shadow-gray-400 p-4 w-[90%] mx-[5%] mb-8"
        >
          <div className="flex flex-col flex-[4]">
            <div className="flex gap-12">
              <div className="font-semibold text-2xl">{bank.name}</div>
              <div className="italic py-2">10Km</div>
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
