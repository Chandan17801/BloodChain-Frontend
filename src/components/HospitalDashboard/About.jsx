import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import BloodChart from "@/components/UIElements/BloodChart";

const About = () => {
  let initialState = {
    email: "hospital@gmail.com",
    phone: "48464964654",
    name: "Devanand Maddhesiya",
    address: "Maharajganj, Gorakhapur",
    licence_expiry_date: "23-04-2025",
    blood_group: "O+",
    district: "Gorakhapur",
    state: "Uttar Pradesh",
    pincode: "787878",
    licence_number: "7451246496",
  };

  const { userType, userId, token, email } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(initialState);
  return (
    <div className="flex flex-col gap-4 flex-[2]">
      <div className="rounded-md shadow-md shadow-gray-400 bg-white flex flex-col items-center">
        <div className="bg-[#6a0c3a] merri text-4xl p-6 rounded-t-md text-gray-200 font-semibold w-full">
          Hospital Name
        </div>
        <div className="flex gap-8 py-4 w-[80%]">
          <div className="flex flex-col flex-[3]">
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Name
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Email
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Phone
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Licence Expiry Date
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Licence No.
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Pincode
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              District
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              State
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Address
            </div>
          </div>
          <div className="flex flex-col flex-[4]">
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.name}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.email}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.phone}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.licence_expiry_date}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.licence_number}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.pincode}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.district}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.state}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.address}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md shadow-md shadow-gray-400">
        <BloodChart color1="rgb(244, 157, 180)" backgroundColor="#6a0c3a" />
      </div>
    </div>
  );
};

export default About;
