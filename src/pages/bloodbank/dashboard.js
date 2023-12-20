import BloodChart from "@/components/UIElements/BloodChart";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";
import last_donations from "@/styles/donations";

export default function dashboard() {
  return (
    <ResponsiveLayout>
      <div className="flex gap-4 min-h-screen py-8 px-8 bg-[#F7F8FA]">
        <div className="flex flex-col flex-[5] gap-4">
          <div className="flex gap-2 mont">
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">AB+</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">O+</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">O+</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">O+</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">O+</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">O+</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">O+</div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center shadow-md shadow-gray-300 py-2 bg-white rounded-lg">
              <div className="text-3xl font-semibold">98</div>
              <div className="text-xs text-gray-400">Pouches</div>
              <div className="text-2xl text-red-700 font-semibold">O+</div>
            </div>
          </div>
          <div className="gap-4 flex flex-col">
            <div className="gap-4 flex">
              <div className="flex-1">
                <BloodChart />
              </div>
              <div className="flex-1">
                <BloodChart />
              </div>
            </div>
            <div className="gap-4 flex">
              <div className="flex-1 bg-gray-400 rounded-lg shadow-md shadow-gray-300 h-[18rem]">
                hi
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 shadow-md shadow-gray-300">
                <div className="flex justify-between mb-4">
                  <div className="pl-2 font-semibold self-start">
                    Donation History
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
                  <div className="flex justify-between p-4 py-[12px] rounded-md">
                    <div>{last_donations[1].date}</div>
                    <div>{last_donations[1].address}</div>
                  </div>
                </div>
                <div className="text-md text-red-500 bg-red-100 rounded-md px-4 py-2 cursor-pointer w-[48] text-center mt-3">
                  View All &raquo;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-[2] gap-4">
          <div className="bg-white rounded-lg p-4 shadow-md shadow-gray-300">
            <div className="flex justify-between mb-4">
              <div className="pl-2 font-semibold self-start">
                Donation History
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
              <div className="flex justify-between p-4 py-[12px] rounded-md">
                <div>{last_donations[1].date}</div>
                <div>{last_donations[1].address}</div>
              </div>
              <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
                <div>{last_donations[2].date}</div>
                <div>{last_donations[2].address}</div>
              </div>
              <div className="flex justify-between p-4 py-[12px] rounded-md">
                <div>{last_donations[1].date}</div>
                <div>{last_donations[1].address}</div>
              </div>
            </div>
            <div className="text-md text-red-500 bg-red-100 rounded-md px-4 py-2 cursor-pointer w-[48] text-center mt-3">
              View All &raquo;
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md shadow-gray-300">
            <div className="flex justify-between mb-4">
              <div className="pl-2 font-semibold self-start">
                Donation History
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
              <div className="flex justify-between p-4 py-[12px] rounded-md">
                <div>{last_donations[1].date}</div>
                <div>{last_donations[1].address}</div>
              </div>
              {/* <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
                <div>{last_donations[2].date}</div>
                <div>{last_donations[2].address}</div>
              </div>
              <div className="flex justify-between p-4 py-[12px] rounded-md">
                <div>{last_donations[1].date}</div>
                <div>{last_donations[1].address}</div>
              </div> */}
            </div>
            <div className="text-md text-red-500 bg-red-100 rounded-md px-4 py-2 cursor-pointer w-[48] text-center mt-3">
              View All &raquo;
            </div>
          </div>
          {/* <div className="flex-1 bg-white rounded-lg shadow-md shadow-gray-300"></div> */}
        </div>
      </div>
    </ResponsiveLayout>
  );
}
