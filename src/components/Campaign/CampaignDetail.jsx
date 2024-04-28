import React, { useEffect, useState } from "react";
import TestingPopUp from "./TestingPopUp";
import CampaignInventory from "./CampaignInventory";

const CampaignDetail = ({ selectedCamp, bloodSample, setBloodSample }) => {
  // console.log(bloodSample);
  const [isTestingPopUpOpen, setIsTestingPopUpOpen] = useState(false);
  const [selectedDonationId, setSelectedDonationId] = useState(null);

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
        <CampaignInventory campId={selectedCamp.campaign_id} />
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
