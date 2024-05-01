import React, { useState, useEffect } from "react";
import Image from "next/image";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import CampaignForm from "./CampaignForm";
import RequestVerify from "./RequestVerify";
import axios from "axios";
import { useSelector } from "react-redux";
import calculateAge from "@/utils/calculateAge";
import CampaignDetail from "./CampaignDetail";
import Loadingg from "../UIElements/Loadingg";
import Loading from "../UIElements/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Campaign() {
  const { userId } = useSelector((state) => state.auth);
  const [isCampaignFormOpen, setIsCampaignFormOpen] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [verifyingRequest, setVerifyingRequest] = useState();
  const [requests, setRequests] = useState([]);
  const [allCamps, setAllCamps] = useState([]);
  const [selectedCamp, setSelectedCamp] = useState();
  const [bloodSample, setBloodSample] = useState([]);
  const [loading, setLoading] = useState(true);

  const addNewCamp = (newCamp) => {
    setSelectedCamp(newCamp);
    setAllCamps((prevAllCamps) => [...prevAllCamps, newCamp]);
    console.log("Camp added");
    toast("Campaign created successfully");
  };

  const rejectHandler = async (e) => {
    // console.log("false");
    try {
      let data = JSON.stringify(formData);
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
  // console.log(status);
  const acceptHandler = async (event) => {
    event.preventDefault();
    // console.log("true");
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
      setBloodSample((prev) => [
        ...prev,
        {
          donation_id: verifyingRequest.donation_id,
          donor_name: verifyingRequest.name,
          blood_type: verifyingRequest.blood_group,
          teststatus: 0,
        },
      ]);
    } catch (error) {
      // console.log("in accept handler catch");
      console.error("Error:", error);
    }
    setIsVerification(false);
  };
  useEffect(() => {
    const fetchRequest = async () => {
      if (!selectedCamp) return;
      try {
        setLoading(true);

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchBloodSample = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL +
            `/donation/all/${selectedCamp.campaign_id}/`
        );
        setBloodSample(response.data.bloodDonations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchRequest();
    fetchBloodSample();
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <ResponsiveLayout>
      <ToastContainer />
      {loading && <Loadingg /> && <Loading />}
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
              {/* "rounded-3xl border-red-900 border-[1px] p-2 cursor-pointer bg-white transition duration-300 transform hover:scale-105" */}
              <Image
                onClick={() => setIsCampaignFormOpen(true)}
                className="w-[60%] rounded-3xl border-red-900 border-[1px] p-2 cursor-pointer bg-white hover:scale-110"
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
              style={{ overflowY: "auto", maxHeight: "370px" }}
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
                  <div className="flex-1 font-semibold">{request.name}</div>
                  <div className="flex-1 text-gray-500 font-thin text-sm">
                    {request.user_id}
                  </div>
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
          <CampaignDetail
            setBloodSample={setBloodSample}
            selectedCamp={selectedCamp}
            bloodSample={bloodSample}
          />
        </div>
      </div>
    </ResponsiveLayout>
  );
}

export default Campaign;
