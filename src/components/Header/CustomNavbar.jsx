import React from "react";
import Link from "next/link";

const CustomNavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 z-50">
      <Link
        href="/searchBloodBank"
        className="text-white hover:bg-gray-600 px-3 py-2 cursor-pointer rounded"
      >
        searchBB
      </Link>
      <Link
        href="/searchCamps"
        className="text-white hover:bg-gray-600 px-3 py-2 rounded"
      >
        searchC
      </Link>
      <Link
        href="/profile"
        className="text-white hover:bg-gray-600 px-3 py-2 rounded"
      >
        Profile
      </Link>
      <Link
        href="/dashboard"
        className="text-white hover:bg-gray-600 px-3 py-2 rounded"
      >
        DashBoard
      </Link>
      <Link
        href="/login"
        className="text-white hover:bg-gray-600 px-3 py-2 rounded"
      >
        Login
      </Link>
    </nav>
  );
};

export default CustomNavBar;
