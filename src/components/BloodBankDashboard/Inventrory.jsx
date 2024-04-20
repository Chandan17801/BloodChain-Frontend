import React from "react";
const Inventrory = ({ amount }) => {
  return (
    <div className="flex gap-2 mont">
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["AB+"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">AB+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["AB-"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">AB-+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["O+"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["O-"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O-</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["B+"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">B+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["B-"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">B-</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["A+"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">A+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">{amount["A-"]}</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">A-</div>
      </div>
    </div>
  );
};

export default Inventrory;
