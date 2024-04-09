import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Inventrory = () => {
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/bloodbank/inventory/${userId}`
        );
        // setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="flex gap-2 mont">
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">AB+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
        <div className="text-3xl font-semibold">98</div>
        <div className="text-xs text-gray-400">Pouches</div>
        <div className="text-2xl text-red-700 font-semibold">O+</div>
      </div>
    </div>
  );
};

export default Inventrory;
