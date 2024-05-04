import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const About = () => {
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  let initialState = {
    address:
      "Abhishek Kirana store.near petroleum building, Labour chowk,Shivaji nagar Labour chowk,Shivaji nagar",
    apheresis_facility: true,
    component_facility: true,
    created_at: "2024-03-17T09:49:19.091Z",
    district: "Jhansi",
    email: "bloodbank1@gmail.com",
    fax_no: "7410258",
    from_date: "2024-02-26T00:00:00.000Z",
    helpline_no: "7410258",
    latitude: "26.875600",
    licence_image: "uploads/1710668956637-wallpaperflare.com_wallpaper (1).jpg",
    licence_no: "7410258",
    longitude: "80.911500",
    name: "Jhansi BloodBank",
    otp: "0",
    otp_generated_at: "2024-03-17T09:49:19.091Z",
    password: "$2b$10$m/GbiDpGay5Ilw6zwbFwaus6y1UEJyhuwEJ7uJEX93x6M6tJl2gpS",
    phone: "6395066298",
    pincode: "284001",
    state: "Uttar Pradesh",
    to_date: "2024-03-28T00:00:00.000Z",
    uid: "952233358435844097",
    website: "JhansiBBBB.com",
  };
  const [profile, setProfile] = useState(initialState);
  useEffect(() => {
    // Function to fetch data from the API

    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/bloodbank/bloodbank/${userId}`
        );
        setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="flex flex-col gap-4 flex-[2]">
      <div className="rounded-md shadow-md shadow-gray-400 bg-white flex flex-col items-center">
        <div className="bg-gradient-to-r from-[#0C2443] to-[#2A5687] merri text-4xl p-6 rounded-t-md text-gray-200 font-semibold w-full">
          {profile.name}
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
              From Date
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              To Date
            </div>{" "}
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Fax No.
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
              Helpline No.
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Website
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
              {profile.fax_no}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.from_date}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.to_date}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.licence_no}
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
              {profile.helpline_no}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.website}
            </div>
            <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
              {profile.address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
