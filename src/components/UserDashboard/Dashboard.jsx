import Image from "next/image";
import React, { useEffect, useState } from "react";
import calculateAge from "@/utils/calculateAge";
import axios from "axios";
import { useSelector } from "react-redux";
import DonationHistory from "./DonationHistory";
import Loading from "../UIElements/Loading";

function Dashboard() {
  let initialState = {
    email: "",
    password: "",
    phone: "",
    name: "",
    address: "",
    date_of_birth: "",
    blood_group: "O+",
    district: "",
    state: "",
    pincode: "",
    aadhaar_no: "",
  };

  const { userType, userId, token, email } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/users/users/${userId}`
        );
        setProfile(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  // if (!profile) return <div>Loading...</div>;

  let age = calculateAge(profile.date_of_birth);

  return (
    <>
      {loading && <Loading />}
      <div className="flex gap-4 min-h-screen py-8 px-20 bg-gray-100">
        <div className="flex flex-col flex-[1] gap-4">
          <div className="p-4 bg-white rounded-lg flex shadow-md shadow-gray-300 mont">
            <div className="flex-[4] flex items-center">
              <div className="w-20 h-24 rounded-xl">
                <Image
                  className="w-full"
                  src={require("../../assests/profile_dummy_image.jpeg")}
                  height={300}
                  width={300}
                  alt={profile.name}
                ></Image>
              </div>
              <div className="text-2xl pl-4 font-semibold">{profile.name}</div>
            </div>
            <div className="flex-[1] flex flex-col justify-center items-center gap-2">
              <div className="text-4xl font-bold text-red-600">
                {profile.blood_group}
              </div>
              <div className="font-light bg-gray-100 px-4 py-1 rounded-md text-sm">
                {age} years
              </div>
            </div>
          </div>

          <div className="p-4 mont bg-white rounded-lg flex flex-col shadow-md shadow-gray-300 items-center w-full text-xs">
            <div className="font-semibold text-xl">About</div>
            <div className="flex gap-8 py-4 w-[80%]">
              <div className="flex flex-col flex-[3]">
                <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                  Name
                </div>
                {profile.blocked && (
                  <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                    Blocked Date
                  </div>
                )}
                <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                  Email
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                  Phone
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                  Date of Birth
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                  Blood Group
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                  Aadhaar No.
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
                {profile.blocked && (
                  <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                    {profile.blocked?.substring(0, 10)}
                  </div>
                )}

                <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                  {profile.email}
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                  {profile.phone}
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                  {profile.date_of_birth.substring(0, 10)}
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                  {profile.blood_group}
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                  {profile.aadhaar_no}
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
        </div>
        <div className="flex-[2]">
          <DonationHistory blocked={profile.blocked} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
