import React from "react";

function RealTimeDataCard({ text, value, className }) {
  return (
    <div
      className={`flex flex-col gap-4 py-8 border-red-900 text-white text-center w-56 rounded-xl font-bold items-center justify-center p-4 ${className}`}
    >
      <div>{text}</div>
      <div>{value}</div>
    </div>
  );
}

export default RealTimeDataCard;
