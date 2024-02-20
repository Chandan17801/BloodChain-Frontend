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
      <div classNameName="grid gap-8">
        {campaigns.map((campaign, index) => (
          <div
            onClick={() => {
              setSelectedCampaign(campaign);
            }}
            key={index}
            classNameName="flex flex-col  text-black shadow-lg rounded-md overflow-hidden"
          >
            <div classNameName="p-4">
              <div classNameName="flex items-center justify-between">
                <h2 classNameName="text-2xl font-semibold">
                  {campaign.campaign_name}
                </h2>
                <p classNameName="text-gray-600">{campaign.campaign_date}</p>
              </div>
              <p classNameName="text-gray-700 mt-2">{campaign.location}</p>
            </div>
            <div classNameName="flex justify-end p-4">
              <button classNameName="bg-[#6A0B32] text-white py-2 px-4 rounded-md">
                Join Campaign
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    //   <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    //     Featured
    //   </div>
    //   <div className="p-6">
    //     <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    //       Special title treatment
    //     </h5>
    //     <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    //       With supporting text below as a natural lead-in to additional content.
    //     </p>
    //     <button
    //       type="button"
    //       href="#"
    //       className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    //       data-te-ripple-init
    //       data-te-ripple-color="light"
    //     >
    //       Go somewhere
    //     </button>
    //   </div>
    //   <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
    //     2 days ago
    //   </div>
    // </div>
  );
}

export default Campaign;
