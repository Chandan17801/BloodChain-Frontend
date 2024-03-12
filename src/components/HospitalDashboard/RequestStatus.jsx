import React from "react";
import { useState } from "react";

const RequestStatus = () => {
  const initialState = [
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
    {
      bloodbank_name: "Bloodbank 1",
      requestID: "B123456",
      date: "2024-03-15",
      bloodType: "O-",
      quantity: "3 units",
      requestStatus: "Approved",
    },
  ];
  const [requests, setRequests] = useState(initialState);

  return (
    <div className="flex-[3] rounded-md shadow-lg shadow-gray-400 bg-white">
      <div className="mont p-4 pb-2 text-[#6a0c3a] font-bold ">
        REQUEST STATUS
      </div>
      <div
        className="p-4 flex flex-col gap-3"
        style={{ overflowY: "auto", maxHeight: "750px" }}
      >
        {requests.map((request) => (
          <div className="bg-[#f5dce2] p-4 rounded-md shadow-md shadow-[#b42347] w-full flex gap-2 flex-col">
            <div className="flex justify-between items-center">
              <div className="merri text-[#6a0c3a] text-lg">
                {request.bloodbank_name}
              </div>
              <div className="text-sm mont text-gray-500">
                {request.requestID}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="text-sm mont text-gray-700"> Date :</div>
                <div className="mtext-sm mont text-gray-500 text-sm">
                  {request.date}
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div className="text-sm mont text-gray-700"> Status :</div>
                <div className="bg-green-100 p-1 rounded-sm text-green-600 shadow-md shadow-green-300">
                  {request.requestStatus}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="text-sm mont text-gray-700"> Blood Type</div>
                <div className="mtext-sm mont text-gray-500 text-sm">
                  {request.bloodType}
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div className="text-sm mont text-gray-700"> Quantity :</div>
                <div className="mtext-sm mont text-gray-500 text-sm">
                  {request.quantity}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestStatus;
