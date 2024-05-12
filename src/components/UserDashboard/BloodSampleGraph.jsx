import campaign from "@/pages/bloodbank/campaign";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BloodSampleGraph = ({ donationId }) => {
  const sample = {
    expiryDate: null,
    testStatus: "Success",
    campaign: "jhansi Campaign",
    campaignDate: "18-02-2024",
    campaignAddress: null,
    bloodbank: "jhansi Bloodbank",
    bloodbankDate: "19-02-2024",
    bloodbankAddress: null,
    hospital: "Jhansihospital",
    hospitalDate: "25-02-2024",
    hospitalAddress: null,
  };
  const [trackingData, setTrackingData] = useState(sample);

  useEffect(() => {
    const fetchData = async () => {
      console.log(donationId);
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/donation/track/${donationId}`
        );
        setTrackingData({
          expiryDate: null,
          testStatus:
            response.data.teststatus == 1
              ? "Success"
              : response.data.teststatus == 0
              ? "Not Tested"
              : "Failed",
          campaign: response.data.campaign_name,
          campaignDate: response.data.donation_date,
          campaignAddress: response.data.campaign_address,
          bloodbank: response.data.bloodbank_name,
          bloodbankDate: response.data.test_date,
          bloodbankAddress: response.data.bloodbank_address,
          hospital: response.data.hospital_name,
          hospitalDate: response.data.hospital_date,
          hospitalAddress: response.data.hospital_address,
        });

        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [donationId]);

  if (donationId == null) return <div>No Sample Selected.</div>;

  return (
    <div className=" bg-[#E9F0F5] rounded-lg p-4 pb-8 shadow-gray-300 shadow-md mont ">
      <div className="mb-4 flex flex-row items-center justify-end gap-4 text-sm">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-gray-500">Test Status :</div>
          <div
            className={`p-2 rounded-sm ${
              trackingData.testStatus == "Success"
                ? "shadow-green-300 text-green-600 bg-green-100"
                : "text-red-600 shadow-red-300 bg-red-100"
            } shadow-md font-semibold`}
          >
            {trackingData.testStatus}
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
                trackingData.campaign
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              }  border-4 border-white rounded-full `}
            ></div>
            <div
              class={`h-2 w-[8rem] ${
                trackingData.bloodbank
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } self-center`}
            ></div>
          </div>
          {trackingData.campaign != null && (
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  {trackingData.campaign}
                </div>
                <div>{trackingData.campaignDate}</div>
                <div>{trackingData.campaignAddress}</div>
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
                trackingData.bloodbank && trackingData.testStatus == "Success"
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              }`}
            ></div>
            <div
              className={`w-12 h-12 ${
                trackingData.bloodbank && trackingData.testStatus == "Success"
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } rounded-full border-4 border-white`}
            ></div>
            <div
              class={`h-2 w-[8rem] ${
                trackingData.hospital
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } self-center`}
            ></div>
          </div>
          {trackingData.bloodbank != null && trackingData.testStatus == "Success" && (
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  {trackingData.bloodbank}
                </div>
                <div>{trackingData.bloodbankDate}</div>
                <div>{trackingData.bloodbankAddress}</div>
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
                trackingData.hospital
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } self-center`}
            ></div>
            <div
              className={`w-12 h-12 ${
                trackingData.hospital
                  ? "bg-red-500 shadow-md shadow-red-300"
                  : "bg-white"
              } rounded-full border-4 border-white`}
            ></div>
            <div class="h-2 w-[8rem] bg-[#E9F0F5] self-center"></div>
          </div>
          {trackingData.hospital != null && (
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  {trackingData.hospital}
                </div>
                <div>{trackingData.hospitalDate}</div>
                <div>{trackingData.hospitalAddress}</div>
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
