import React from "react";
import Link from "next/link";

function Navigator() {
  return <div className="bg-gray-100 text-white p-4">
    <div className="flex justify-between px-20">
    <div className= "flex  items-center justify-center bg-red-800 rounded-xl shadow-md w-40 h-40 p-4 ">
      <Link href="#" className="flex font-bold text-xl mx-3 text-center">Blood Availability Search</Link>
      </div>
    <div className="flex  items-center justify-center bg-blue-500  rounded-xl shadow-md w-40 h-40 p-4">
      <Link href="#" className="flex font-bold text-xl mx-3  text-center">Blood Bank Directory</Link>
      </div>
    <div className="flex  items-center justify-center bg-yellow-500 rounded-xl shadow-md w-40 h-40 p-4 ">
      <Link href="#" className="flex font-bold text-xl mx-3 text-center">Blood Donation Camp</Link>
      </div>
    <div className="flex  items-center justify-center bg-orange-500 rounded-xl shadow-md w-40 h-40 p-4 ">
      <Link href="/register/donor" className="flex font-bold text-xl mx-3 text-center">Donor Login</Link>
      </div>
    <div className="flex  items-center justify-center bg-green-500 rounded-xl shadow-md w-40 h-40 p-4 ">
      <Link href="#" className="flex font-bold text-xl mx-3 text-center">Register Voluntary Blood Camp</Link>
      </div>
    </div>
  </div>;
}

export default Navigator;
