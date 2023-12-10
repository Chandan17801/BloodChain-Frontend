import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import Image from "next/image";
import React, { useState } from "react";
import last_donations from "@/styles/donations";

function Dashboard() {
  const [profile, setProfile] = useState({
    email: "dummy@example.com",
    password: "dummyPassword123",
    phone: "1234567890",
    name: "Dummy User",
    address: "123 Dummy Street",
    date_of_birth: "1990-01-01",
    blood_group: "O+",
    district: "Dummy District",
    state: "Dummy State",
    pincode: "123456",
    aadhar_no: "1234567890123456",
    email_verified: false,
    otp: "123456",
    otp_generated_at: "2023-01-01T12:00:00Z", // Use a valid timestamp
    last_donation: null, // No donation history initially
    latitude: 40.7128, // Dummy latitude (New York City)
    longitude: -74.006, // Dummy longitude (New York City)
    created_at: "2023-01-01T00:00:00Z", // Use a valid timestamp
  });
  function calculateAge(dob) {
    const today = new Date();
    const dobArray = dob.split("-");

    const dobYear = parseInt(dobArray[0]);
    const dobMonth = parseInt(dobArray[1]) - 1; // Months are zero-indexed
    const dobDay = parseInt(dobArray[2]);

    const birthDate = new Date(dobYear, dobMonth, dobDay);

    let age = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    const arrow_bracket = ">"

    return age;
  }

  const age = calculateAge(profile.date_of_birth);
  return (
    <ResponsiveLayout>
      <div className="flex gap-4 min-h-screen py-8 px-20 bg-gray-100">
        <div className="flex flex-col flex-1 gap-4">
          <div className="p-4 bg-white rounded-lg flex shadow-md shadow-gray-300 mont">
            <div className="flex-[4] flex items-center">
              <div className="w-20 h-24 rounded-xl">
                <Image
                  className="w-full"
                  src={require("../../assests/profile_dummy_image.jpeg")}
                  height={300}
                  width={300}
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
                  Aadhar No.
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
                  {profile.date_of_birth}
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                  {profile.blood_group}
                </div>
                <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                  {profile.aadhar_no}
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
        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 shadow-gray-300 shadow-md mont">
            <div className="flex justify-between mb-4">
              <div className="pl-2 font-semibold self-center">Donation History</div>
              <div className="text-sm text-red-500 bg-red-100 rounded-md px-4 py-1 cursor-pointer">View All &raquo;</div>
            </div>
            <div className="flex flex-col text-xs">
              <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
                <div>{last_donations[0].date}</div>
                <div>{last_donations[0].address}</div>
              </div>
              <div className="flex justify-between p-4 py-[12px] rounded-md">
                <div>{last_donations[1].date}</div>
                <div>{last_donations[1].address}</div>
              </div>
              <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
                <div>{last_donations[2].date}</div>
                <div>{last_donations[2].address}</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}

export default Dashboard;
