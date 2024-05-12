import React from "react";
import { useState } from "react";
import UserRequestConfirmPopUp from "../layout/UserRequestConfirmPopUp";

function Campaign({ campaigns }) {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  return (
    <div classNameName="container mx-auto mt-8">
      {selectedCampaign != null && (
        <UserRequestConfirmPopUp
          campaign={selectedCampaign}
          close={() => setSelectedCampaign(null)}
        />
      )}
      <div className="grid grid-cols-2 gap-4">
        {campaigns.map((campaign, index) => (
          <div key={index} classNameName="">
            <div className="mont rounded-lg  text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-700">
              <div className="border-b-2 px-6 py-3 border-gray-600 text-gray-50">
                {campaign.campaign_name}
              </div>
              <div className="p-6 border-b-[1px] border-gray-50">
                <h4 className="mb-2 text-xl font-medium leading-tight text-gray-50">
                  {campaign.location}
                </h4>
                <p className="mb-4 text-base text-gray-600 dark:text-gray-200">
                  {campaign.goal}
                </p>
                <div className="text-white font-semibold">
                  {campaign.campaign_date.substring(0, 10)}
                </div>
              </div>
              <button
                type="button"
                href="#"
                className=" px-6 py-2 rounded-lg shadow-sm shadow-gray-100 my-4 text-white"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => {
                  setSelectedCampaign(campaign);
                }}
              >
                Join Campaign
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campaign;
