import React from "react";

const Loadingg = () => {
  return (
    <div className="flex min-h-screen max-h-screen gap-4 p-8 bg-[#F7F8FA]">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex flex-1 rounded-lg red-creative shadow-gray-300 shadow-md">
          <div className="flex-[2] flex flex-col text-5xl p-4 font-extrabold mont items-center justify-evenly text-white"></div>
          <div className="flex-1 flex flex-col items-end p-4"></div>
        </div>
        <div className="flex-[2] rounded-lg merri shadow-gray-300 shadow-md p-4 bg-white">
          <div
            className="flex flex-col py-2 mont"
            style={{ overflowY: "auto", maxHeight: "400px" }}
          ></div>
        </div>
      </div>
      <div className="flex-[2] flex flex-col gap-4">
        <div className="flex-1 flex flex-col rounded-lg shadow-gray-300 shadow-md p-4 bg-white gap-4">
          <div className="flex-1 merri flex justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default Loadingg;
