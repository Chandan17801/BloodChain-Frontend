import campaign from "@/pages/bloodbank/campaign";
import React from "react";

const BloodSampleGraph = () => {
  const sample = {
    expiryDate: null,
    testStatus: "Success",
    campaign: "jhansi Campaign",
    campaignDate: "18-02-2024",
    campaignAddress: null,
    campaignDistrict: null,
    bloodbank: "jhansi Bloodbank",
    bloodbankDate: "19-02-2024",
    bloodbankAddress: null,
    bloodbankDistrict: null,
    hospital: "Jhansihospital",
    hospitalDate: "25-02-2024",
    hospitalAddress: null,
    hospitalDistrict: null,
  };
  return (
    <div className=" bg-[#E9F0F5] rounded-lg p-4 pb-8 shadow-gray-300 shadow-md mont ">
      <div className="mb-4 flex flex-row items-center justify-end gap-4 text-sm">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-gray-500">Test Status :</div>
          <div
            className={`p-2 rounded-sm ${
              sample.testStatus == "Success"
                ? "shadow-green-300 text-green-600 bg-green-100"
                : "text-red-600 shadow-red-300 bg-red-100"
            } shadow-md font-semibold`}
          >
            {sample.testStatus}
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-gray-500">Expiry Date :</div>
          <div className="bg-red-100 p-2 rounded sm text-red-600 shadow-md shadow-red-300 font-semibold">
            28-02-2024
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-start min-h-[20rem]">
        <div className="flex flex-col flex-1 justify-center items-center">
          <div class="relative inline-block mb-8">
            <div class="bg-[#C7D5DF] text-gray-800 p-4 rounded-md shadow-md font-bold">
              Campaign
            </div>
            <div class="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-[#C7D5DF] w-4 h-4 rotate-45 -mt-1"></div>
          </div>
          <div className="flex flex-row">
            <div class="h-2 w-[8rem] bg-[#E9F0F5] self-center"></div>
            <div
              className={`w-12 h-12 ${
                sample.campaign
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              }  border-4 border-white rounded-full `}
            ></div>
            <div
              class={`h-2 w-[8rem] ${
                sample.bloodbank
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } self-center`}
            ></div>
          </div>
          {sample.campaign != null && (
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  {sample.campaign}
                </div>
                <div>{sample.campaignDate}</div>
                <div>{sample.campaignAddress}</div>
                <div>{sample.campaignDistrict}</div>
                <div class="absolute top-[-4px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rotate-45 -mt-1"></div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <div class="relative inline-block mb-8">
            <div class="bg-[#C7D5DF] text-gray-800 p-4 rounded-md shadow-md font-bold">
              Blood Bank
            </div>
            <div class="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-[#C7D5DF] w-4 h-4 rotate-45 -mt-1"></div>
          </div>
          <div className="flex flex-row">
            <div
              class={`h-2 w-[8rem] self-center ${
                sample.bloodbank
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              }`}
            ></div>
            <div
              className={`w-12 h-12 ${
                sample.bloodbank
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } rounded-full border-4 border-white`}
            ></div>
            <div
              class={`h-2 w-[8rem] ${
                sample.hospital
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } self-center`}
            ></div>
          </div>
          {sample.bloodbank != null && (
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  {sample.bloodbank}
                </div>
                <div>{sample.bloodbankDate}</div>
                <div>{sample.bloodbankAddress}</div>
                <div>{sample.bloodbankDistrict}</div>
                <div class="absolute top-[-4px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rotate-45 -mt-1"></div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1 justify-center items-center">
          <div class="relative inline-block mb-8">
            <div class="bg-[#C7D5DF] text-gray-800 p-4 rounded-md shadow-md font-bold">
              Hospital
            </div>
            <div class="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-[#C7D5DF] w-4 h-4 rotate-45 -mt-1"></div>
          </div>
          <div className="flex flex-row">
            <div
              class={`h-2 w-[8rem] ${
                sample.hospital
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } self-center`}
            ></div>
            <div
              className={`w-12 h-12 ${
                sample.hospital
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } rounded-full border-4 border-white`}
            ></div>
            <div class="h-2 w-[8rem] bg-[#E9F0F5] self-center"></div>
          </div>
          {sample.hospital != null && (
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  {sample.hospital}
                </div>
                <div>{sample.hospitalDate}</div>
                <div>{sample.hospitalAddress}</div>
                <div>{sample.hospitalDistrict}</div>
                <div class="absolute top-[-4px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rotate-45 -mt-1"></div>
              </div>
            </div>
          )}
        </div>
        {/* <div className="flex flex-col flex-1 justify-center items-center">
            <div class="relative inline-block mb-8">
              <div class="bg-[#C7D5DF] text-gray-800 p-4 rounded-md shadow-md font-bold">
                Receipent
              </div>
              <div class="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-[#C7D5DF] w-4 h-4 rotate-45 -mt-1"></div>
            </div>
            <div className="flex flex-row">
              <div class="h-2 w-[5.5rem] bg-white self-center"></div>
              <div class="w-12 h-12 bg-white border-4 border-white rounded-full"></div>
              <div class="h-2 w-[5.5rem] bg-[#E9F0F5] self-center"></div>
            </div> */}
        {/* <div className="">
            <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
            <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                Receipent Name
                </div>
              <div>18-02-2024</div>
              <div>Address</div>
              <div>District</div>
              <div class="absolute top-[-4px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rotate-45 -mt-1"></div>
              </div>
            </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default BloodSampleGraph;
