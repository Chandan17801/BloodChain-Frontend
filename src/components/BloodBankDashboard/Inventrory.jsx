import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Inventrory = () => {
  let initialState = {
    "O+": 0,
    "O-": 0,
    "A+": 0,
    "A-": 0,
    "B+": 0,
    "B-": 0,
    "AB+": 0,
    "AB-": 0,
  };
  const [amount, setAmount] = useState(initialState);
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/bloodbank/inventory/${userId}`
        );
        // setProfile(response.data);
        initialState = {
          "O+": 0,
          "O-": 0,
          "A+": 0,
          "A-": 0,
          "B+": 0,
          "B-": 0,
          "AB+": 0,
          "AB-": 0,
        };
        response.data.forEach((donation) => {
          initialState[donation.blood_type] = donation.count;
        });
        console.log(initialState);
        console.log(initialState["B-"]);
        setAmount(initialState);
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
