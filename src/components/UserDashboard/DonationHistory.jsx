import React from "react";
import last_donations from "@/styles/donations";

function DonationHistory() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="bg-white rounded-lg p-4 shadow-gray-300 shadow-md mont flex-1">
          <div className="flex justify-between mb-4">
            <div className="pl-2 font-semibold self-center">
              Donation History
            </div>
            <div className="text-sm text-red-500 bg-red-100 rounded-md px-4 py-1 cursor-pointer">
              View All &raquo;
            </div>
          </div>
          <div
            className="flex flex-col text-xs"
            style={{ overflowY: "auto", maxHeight: "350px" }}
          >
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
        <div className="bg-white rounded-lg p-4 shadow-gray-300 shadow-md mont flex-1">
          <div className="flex justify-between mb-4">
            <div className="pl-2 font-semibold self-center">
              Donation History
            </div>
            <div className="text-sm text-red-500 bg-red-100 rounded-md px-4 py-1 cursor-pointer">
              View All &raquo;
            </div>
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
      </div>
      <div className=" bg-[#E9F0F5] rounded-lg p-4 pb-8 shadow-gray-300 shadow-md mont ">
        <div className="mb-4 flex flex-row items-center justify-end gap-4 text-sm">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-gray-500">Test Status :</div>
            <div className="bg-green-100 p-2 rounded-sm text-green-600 shadow-md shadow-green-300 font-semibold">
              Success
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
              <div class="h-2 w-20 bg-[#E9F0F5] self-center"></div>
              <div class="w-12 h-12 bg-red-500 border-4 border-white rounded-full shadow-md shadow-red-300"></div>
              <div class="h-2 w-[5.5rem] bg-red-500 self-center shadow-md shadow-red-300"></div>
            </div>
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  Campaign Name
                </div>
                <div>18-02-2024</div>
                <div>Address</div>
                <div>District</div>
                <div class="absolute top-[-4px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rotate-45 -mt-1"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div class="relative inline-block mb-8">
              <div class="bg-[#C7D5DF] text-gray-800 p-4 rounded-md shadow-md font-bold">
                Blood Bank
              </div>
              <div class="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-[#C7D5DF] w-4 h-4 rotate-45 -mt-1"></div>
            </div>
            <div className="flex flex-row">
              <div class="h-2 w-[5.5rem] bg-red-500 self-center shadow-md shadow-red-300"></div>
              <div class="w-12 h-12 bg-red-500 border-4 border-white rounded-full shadow-md shadow-red-300"></div>
              <div class="h-2 w-[5.5rem] bg-white self-center"></div>
            </div>
            <div className="">
              <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
                <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
                  Blood Bank Name
                </div>
                <div>19-02-2024</div>
                <div>Address</div>
                <div>District</div>
                <div class="absolute top-[-4px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rotate-45 -mt-1"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            <div class="relative inline-block mb-8">
              <div class="bg-[#C7D5DF] text-gray-800 p-4 rounded-md shadow-md font-bold">
                Hospital
              </div>
              <div class="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 bg-[#C7D5DF] w-4 h-4 rotate-45 -mt-1"></div>
            </div>
            <div className="flex flex-row">
              <div class="h-2 w-[5.5rem] bg-white self-center"></div>
              <div class="w-12 h-12 bg-white border-4 border-white rounded-full"></div>
              <div class="h-2 w-[5.5rem] bg-white self-center"></div>
            </div>
            {/* <div className="">
            <div class="relative mt-8 rounded-md shadow-md bg-white p-4 flex flex-col gap-2 text-xs">
            <div className="bg-black py-1 px-2 font-semibold rounded-[4px] text-white">
            Hospital Name
            </div>
            <div>18-02-2024</div>
            <div>Address</div>
            <div>District</div>
            <div class="absolute top-[-4px] left-1/2 transform -translate-x-1/2 bg-white w-4 h-4 rotate-45 -mt-1"></div>
            </div>
          </div> */}
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
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
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationHistory;
