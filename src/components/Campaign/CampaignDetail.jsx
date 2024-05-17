import React, { useEffect, useState } from "react";
import TestingPopUp from "./TestingPopUp";
import CampaignInventory from "./CampaignInventory";
import axios from "axios";

const CampaignDetail = ({ selectedCamp, bloodSample, setBloodSample }) => {
  // console.log(bloodSample);
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
  const [isTestingPopUpOpen, setIsTestingPopUpOpen] = useState(false);
  const [selectedDonationId, setSelectedDonationId] = useState(null);
  const [amount, setAmount] = useState(initialState);
  const increaseAmountHandler = (blood_type) => {
    console.log(blood_type);
    let newAmount = { ...amount };
    newAmount[blood_type]++;
    setAmount(newAmount);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL +
            `/donation/all/${selectedCamp.campaign_id}`
        );
        // console.log(response.data.bloodDonations);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        response.data.bloodDonations.forEach((donation) => {
          if (donation.teststatus === 1) initialState[donation.blood_type]++;
        });
        // console.log(initialState);
        setAmount(initialState);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [selectedCamp.campaign_id]);

  // useEffect(() => {
  //   console.log(selectedCamp);
  //   console.log(bloodSample);
  // }, [selectedCamp, bloodSample]);

  if (!selectedCamp) return <div></div>;

  return (
    <div className="flex-[2] flex flex-row rounded-lg shadow-gray-300 shadow-md p-4 bg-white red-creative-2 mont gap-2">
      {isTestingPopUpOpen && (
        <TestingPopUp
          donationId={selectedDonationId}
          setBloodSample={setBloodSample}
          bloodSample={bloodSample}
          increaseAmountHandler={increaseAmountHandler}
          close={() => {
            setIsTestingPopUpOpen(false);
          }}
        />
      )}
      <div className="flex-1">
        <div className="flex-1">
          <div className="text-red-900 text-3xl p-4 font-bold">
            {selectedCamp?.campaign_name}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-evenly px-4">
          <div className="flex-1 italic">
            {selectedCamp?.campaign_date?.substring(0, 10)}
          </div>
          <div className="flex-1 text-lg font-semibold">
            {selectedCamp?.location}
          </div>
        </div>
        <div className="flex-1 px-4">
          Goals: <span>{selectedCamp?.goals}</span>
        </div>
        <CampaignInventory
          campId={selectedCamp.campaign_id}
          amount={amount}
          setAmount={setAmount}
        />
      </div>
      <div className="flex-1">
        <div className="font-semibold text-xl pl-2">Collected Samples</div>
        <div
          className="flex flex-col gap-2 p-2"
          style={{ overflowY: "auto", maxHeight: "344px" }}
        >
          {bloodSample.map((sample, index) => (
            <div
              className="flex gap-3 rounded-md shadow-md shadow-gray-300 px-4 py-2 mont bg-white-100 bg-white cursor-pointer"
              key={sample.donation_id}
              onClick={() => {
                setSelectedDonationId(sample.donation_id);
                if (sample.teststatus == 0) setIsTestingPopUpOpen(true);
              }}
            >
              {(!sample.teststatus ||
                (sample.status == 0 &&
                  sample.status != 1 &&
                  sample.status != 2)) && (
                <div className="self-center w-3 h-3 rounded-full bg-yellow-400"></div>
              )}
              {sample.teststatus === 2 && (
                <div className="self-center w-3 h-3 rounded-full bg-red-400"></div>
              )}
              {sample.teststatus === 1 && (
                <div className="self-center w-3 h-3 rounded-full bg-green-400"></div>
              )}
              <div className="flex justify-between w-full items-center">
                <div className="flex-1 font-semibold">{sample.donor_name}</div>
                <div className="flex-1 text-lg font-semibold text-red-900">
                  {sample.blood_type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;
