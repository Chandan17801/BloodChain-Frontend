import React from "react";
import Link from "next/link";

function Navigator() {
  return (
    <div className="bg-gray-100 text-white py-4 px-20">
      <div className="flex justify-between px-20">
        <div className="flex items-center justify-center bg-red-800 rounded-xl shadow-md w-44 h-40 p-4 ">
          <Link
            href="#"
            className="flex font-bold text-xl mx-3 text-center hover:underline"
          >
            Blood Availability Search
          </Link>
        </div>
        <div className="flex items-center justify-center bg-blue-500  rounded-xl shadow-md w-44 h-40 p-4">
          <Link
            href="#"
            className="flex font-bold text-xl mx-3 text-center hover:underline"
          >
            Blood Bank Directory
          </Link>
        </div>
        <div className="flex items-center justify-center bg-yellow-500 rounded-xl shadow-md w-44 h-40 p-4">
          <Link
            href="#"
            className="flex font-bold text-xl mx-3 text-center hover:underline"
          >
            Upcoming Blood Donation Camp
          </Link>
        </div>
        <div className="flex items-center justify-center bg-orange-500 rounded-xl shadow-md w-44 h-40 p-4">
          <Link
            href="/register/donor"
            className="flex font-bold text-xl mx-3 text-center hover:underline"
          >
            Donor Login
          </Link>
        </div>
        <div className="flex items-center justify-center bg-green-500 rounded-xl shadow-md w-44 h-40 p-4">
          <Link
            href="#"
            className="flex font-bold text-xl mx-3 text-center hover:underline"
          >
            Register Voluntary Blood Camp
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigator;
