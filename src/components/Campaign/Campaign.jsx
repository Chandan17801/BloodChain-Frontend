import React, { useState } from "react";
import Image from "next/image";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import CampaignForm from "./CampaignForm";

function Campaign() {
  const [isCampaignFormOpen, setIsCampaignFormOpen] = useState(false);
  const [requests, setRequests] = useState([
    {
      user_id: "01",
      name: "Devanand Maddhesiya",
      blood_group: "B+",
      age: "23",
    },
    {
      user_id: "01",
      name: "Gaurav Singh",
      blood_group: "O+",
      age: "22",
    },
    {
      user_id: "01",
      name: "Shadan Shan",
      blood_group: "AB+",
      age: "22",
    },
  ]);
  const [allCamps, setAllCamps] = useState([
    {
      name: "Health Camp",
      date: "18-03-2023",
      goals:
        "Providing comprehensive health check-ups to individuals of all ages, with a focus on preventive care and early detection of potential health issues. Offering medical consultations, vaccinations, and promoting a healthy lifestyle.",
      location: "City Hospital, Bijnor",
    },
    {
      name: "Blood Drive",
      date: "1-06-2023",
      goals:
        "Organizing a large-scale blood donation drive to address the critical need for blood in hospitals. Encouraging community members to contribute to this life-saving cause by donating blood at the Red Cross, Gorakhpur.",
      location: "Red Cross, Gorakhpur",
    },
    {
      name: "Community Wellness",
      date: "28-09-2023",
      goals:
        "Fostering community well-being through a wellness program that includes educational sessions, fitness activities, and mental health awareness initiatives. Creating a supportive environment at the Jaunpur Community Center.",
      location: "Jaunpur Community Center",
    },
    {
      name: "Medical Camp",
      date: "10-11-2023",
      goals:
        "Providing accessible medical consultations to underserved populations at the City Clinic, Lucknow. Offering free medical advice, diagnostic services, and referrals for further treatment when needed.",
      location: "City Clinic, Lucknow",
    },
    {
      name: "Health Fair",
      date: "5-02-2024",
      goals:
        "Organizing a Health Education Fair at the Varanasi Health Fair Grounds to raise awareness about various health topics. Offering informative workshops, interactive exhibits, and resources for better health.",
      location: "Varanasi Health Fair Grounds",
    },
    {
      name: "Blood-Donor Drive",
      date: "22-06-2024",
      goals:
        "Conducting a Blood-Donor Drive at the Kanpur Blood Bank to build a sustainable blood supply. Mobilizing the community to become regular blood donors and save lives through their altruistic contributions.",
      location: "Kanpur Blood Bank",
    },
    {
      name: "Wellness Expo",
      date: "15-09-2024",
      goals:
        "Showcasing a Wellness Expo at the Allahabad Exhibition Center to promote holistic well-being. Featuring health products, fitness demonstrations, and expert sessions on mental and physical health.",
      location: "Allahabad Exhibition Center",
    },
    {
      name: "Medical Outreach",
      date: "7-12-2024",
      goals:
        "Extending medical outreach programs at the Agra Community Hall to reach marginalized communities. Offering healthcare services, health education, and facilitating access to necessary medical resources.",
      location: "Agra Community Hall",
    },
    {
      name: "Community Health",
      date: "3-04-2025",
      goals:
        "Implementing a comprehensive Community Health Program at the Meerut Community Center to address prevalent health issues. Focusing on preventive measures, health screenings, and community engagement.",
      location: "Meerut Community Center",
    },
    {
      name: "Blood Drive10",
      date: "20-08-2025",
      goals:
        "Continuing the mission of promoting blood donation at the Aligarh Blood Donation Center. Encouraging individuals to become regular blood donors and emphasizing the impact of their contributions on saving lives.",
      location: "Aligarh Blood Donation Center",
    },
  ]);
  const [selectedCamp, setSelectedBank] = useState(allCamps[0]);
  return (
    <ResponsiveLayout>
      {isCampaignFormOpen && <CampaignForm />}

      <div className="flex min-h-screen max-h-screen gap-4 p-8 bg-[#F7F8FA]">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-1 rounded-lg red-creative shadow-gray-300 shadow-md">
            <div className="flex-[2] flex flex-col text-5xl p-4 font-extrabold mont items-center justify-evenly text-white">
              <div className="text-red-800">Add New</div>
              <div>CAMPAIGN</div>
            </div>
            <div className="flex-1 flex flex-col items-end p-4">
              <Image
                onClick={() => setIsCampaignFormOpen(true)}
                className="w-[60%] rounded-3xl border-red-900 border-[1px] p-2 cursor-pointer bg-white"
                src={require("../../assests/plus_sign.png")}
                height={300}
                width={300}
                alt="plus-sign"
              ></Image>
            </div>
          </div>
          <div className="flex-[2] rounded-lg merri shadow-gray-300 shadow-md p-4 bg-white">
            <div className="text-xl text-red-900 pb-2">Campaign List</div>
            <div
              className="flex flex-col py-2 mont"
              style={{ overflowY: "auto", maxHeight: "400px" }}
            >
              {allCamps.map((camp, index) => (
                <div
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white" // Alternate colors
                  } rounded-md p-2 flex items-center`}
                  key={index}
                >
                  <div className="flex-[8] pl-2 font-semibold">{camp.name}</div>
                  <div className="flex-[4] font-light">{camp.date}</div>
                  <div
                    onClick={() => {
                      setSelectedBank(camp);
                    }}
                    className="flex-1 text-red-900 flex text-3xl cursor-pointer justify-end pr-1"
                  >
                    {" "}
                    &raquo;{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-[2] flex flex-col gap-4">
          <div className="flex-1 flex flex-col rounded-lg shadow-gray-300 shadow-md p-4 bg-white gap-4">
            <div className="flex-1 merri flex justify-between">
              <div className="border-b-2 text-red-900 border-gray-400 text-xl self-start">
                Blood Request
              </div>
              <div className="flex mont gap-2">
                <div className="self-center font-semibold rounded-md px-4">
                  {allCamps[0].name}
                </div>
                <div className="bg-gray-100 self-center p-2 text-sm rounded-md">
                  {allCamps[0].date}
                </div>
                <div className="bg-gray-100 self-center p-2 text-sm rounded-md">
                  {allCamps[0].location}
                </div>
              </div>
            </div>
            <div className="flex-[3] flex gap-2">
              {requests.map((request, index) => (
                <div className="flex-1 flex flex-col rounded-md shadow-md shadow-gray-300 p-4 mont">
                  <div className="flex-1 text-gray-500 font-thin">
                    {request.user_id}
                  </div>
                  <div className="flex-1 font-semibold">{request.name}</div>
                  <div className="flex-1">Age: {request.age}</div>
                  <div className="flex-1 text-2xl font-semibold text-red-900">
                    {request.blood_group}
                  </div>
                  <button
                    type="submit"
                    className="ml-auto justify-center w-24 bg-black flex text-white py-1 rounded-lg font-semibold"
                  >
                    Verify
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-[2] flex flex-col rounded-lg shadow-gray-300 shadow-md p-4 bg-white red-creative-2 mont gap-2">
            <div className="flex-1">
              <div className="text-red-900 text-3xl p-4 font-bold">
                {selectedCamp.name}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 justify-evenly px-4">
              <div className="flex-1 italic">{selectedCamp.date}</div>
              <div className="flex-1 text-lg font-semibold">
                {selectedCamp.location}
              </div>
            </div>
            <div className="flex-1 px-4">
              Goals: <span>{selectedCamp.goals}</span>
            </div>
            <div className="flex flex-1 gap-2 mont">
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">AB+</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">O+</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">O+</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">O+</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">O+</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">O+</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">O+</div>
              </div>
              <div className="flex flex-col flex-1 justify-center items-center shadow-md py-2 bg-white rounded-lg">
                <div className="text-3xl font-semibold">98</div>
                <div className="text-xs text-gray-400">Pouches</div>
                <div className="text-2xl text-red-700 font-semibold">O+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}

export default Campaign;
