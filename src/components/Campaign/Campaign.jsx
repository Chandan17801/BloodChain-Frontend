import React, { useState, useEffect } from "react";
import Image from "next/image";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import CampaignForm from "./CampaignForm";
import RequestVerify from "./RequestVerify";
import axios from "axios";
import { useSelector } from "react-redux";
import calculateAge from "@/utils/calculateAge";

function Campaign() {
  const { userId } = useSelector((state) => state.auth);
  const [isCampaignFormOpen, setIsCampaignFormOpen] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [verifyingRequest, setVerifyingRequest] = useState();
  const [requests, setRequests] = useState([]);
  const [allCamps, setAllCamps] = useState([]);
  const [selectedCamp, setSelectedCamp] = useState();

  const addNewCamp = (newCamp) => {
    setAllCamps((prevAllCamps) => [...prevAllCamps, newCamp]);
  };

  const rejectHandler = async (e) => {
    console.log("false");
    // try {
    //   // let data = JSON.stringify(formData)
    //   let response = await axios.patch(
    //     process.env.NEXT_PUBLIC_SERVER_URL +
    //       `/donation/approve/${verifyingRequest.donation_id}`
    //   );
    //   console.log("Response:", response);
    //   const updated_request = requests.filter(
    //     (req) => req.donation_id != verifyingRequest.donation_id
    //   );
    //   setRequests(updated_request);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    // setIsVerification(false);
  };
  // console.log(status);
  const acceptHandler = async (event) => {
    event.preventDefault();
    console.log("true");
    try {
      let response = await axios.patch(
        process.env.NEXT_PUBLIC_SERVER_URL +
          `/donation/approve/${verifyingRequest.donation_id}`
      );
      console.log("Response:", response);
      const updated_request = requests.filter(
        (req) => req.donation_id != verifyingRequest.donation_id
      );
      setRequests(updated_request);
    } catch (error) {
      console.error("Error:", error);
    }
    setIsVerification(false);
  };

  const fetchRequest = async () => {
    if (!selectedCamp) return;
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL +
          `/donation/request/${selectedCamp.campaign_id}`
      );

      let data = response.data.request.map((item) => ({
        donation_id: item.donation_id,
        user_id: item.donor_id,
        name: item.donor_name,
        blood_group: item.blood_type,
        age: calculateAge(item.donor_dob),
        last_donation: item.donor_last_dontation,
      }));
      setRequests(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [selectedCamp]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/camps/bloodbank/${userId}`
        );
        const camps = response.data.data;
        setAllCamps(camps);
        if (!selectedCamp) {
          setSelectedCamp(camps[0] ? camps[0] : null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveLayout>
      {isVerification && (
        <RequestVerify
          request={verifyingRequest}
          close={() => {
            setIsVerification(false);
          }}
          acceptHandler={acceptHandler}
          rejectHandler={rejectHandler}
        />
      )}
      {isCampaignFormOpen && (
        <CampaignForm
          close={() => {
            setIsCampaignFormOpen(false);
          }}
          addNewCamp={addNewCamp}
        />
      )}

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
                  onClick={() => setSelectedCamp(camp)}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } rounded-md p-2 flex items-center cursor-pointer`}
                  key={index}
                >
                  <div className="flex-[8] pl-2 text-sm font-semibold">
                    {camp.campaign_name}
                  </div>
                  <div className="flex-[4] font-light text-sm">
                    {camp.campaign_date.substring(0, 10)}
                  </div>
                  <div className="flex-1 text-red-900 flex text-3xl justify-end pr-1">
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
                  {allCamps[0]?.campaign_name}
                </div>
                <div className="bg-gray-100 self-center p-2 text-sm rounded-md">
                  {allCamps[0]?.campaign_date.substring(0, 10)}
                </div>
                <div className="bg-gray-100 self-center p-2 text-sm rounded-md">
                  {allCamps[0]?.location}
                </div>
              </div>
            </div>
            <div
              className="flex-[3] grid grid-cols-3 gap-2"
              style={{ overflowY: "auto", maxHeight: "190px" }}
            >
              {requests.map((request, index) => (
                <div
                  className="flex flex-col rounded-md shadow-md shadow-gray-300 p-4 mont"
                  key={index}
                >
                  <div className="flex-1 text-gray-500 font-thin">
                    {request.user_id}
                  </div>
                  <div className="flex-1 font-semibold">{request.name}</div>
                  <div className="flex-1">Age: {request.age}</div>
                  <div className="flex-1 text-2xl font-semibold text-red-900">
                    {request.blood_group}
                  </div>
                  <button
                    onClick={() => {
                      setIsVerification(true);
                      setVerifyingRequest(request);
                    }}
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
                {selectedCamp?.campaign_name}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 justify-evenly px-4">
              <div className="flex-1 italic">
                {selectedCamp?.campaign_date.substring(0, 10)}
              </div>
              <div className="flex-1 text-lg font-semibold">
                {selectedCamp?.location}
              </div>
            </div>
            <div className="flex-1 px-4">
              Goals: <span>{selectedCamp?.goals}</span>
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
