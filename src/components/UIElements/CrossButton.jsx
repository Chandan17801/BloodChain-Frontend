import React from "react";

function CrossButton({ close, sign }) {
  return (
    <div
      onClick={close}
      className="absolute top-0 m-2 rounded-md bg-gray-100 right-0 text-2xl text-red-800 mont w-8 font-semibold cursor-pointer h-8 text-center"
    >
      {sign}
    </div>
  );
}

export default CrossButton;
