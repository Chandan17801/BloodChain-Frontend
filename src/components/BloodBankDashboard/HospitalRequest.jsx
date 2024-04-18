import React from "react";

const HospitalRequest = ({ requests }) => {
  return (
    <div className="flex flex-col flex-[2] gap-4 bg-transparent  p-4">
      <div className="pl-2 font-semibold self-start text-lg mont text-gray-500">
        Hospital Requests
      </div>
      {requests.map((request) => (
        <div className="p-4 flex flex-row rounded-xl bg-white shadow-md shadow-gray-300">
          <div className="flex flex-col flex-1">
            <div className="merri text-lg text-gray-700">
              {request.hospital_name}
            </div>
            <div className="italic mont text-sm text-gray-400">
              {new Date(request.request_date).toDateString()}
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <div className="self-end mont font-semibold text-lg text-red-700">
              {request.blood_type}
            </div>
            <div className="flex flex-row gap-4 justify-end">
              <div className="p-4 text-white cursor-pointer mont bg-gradient-to-r from-[#0C2443] to-[#2A5687] rounded-3xl py-2 text-sm">
                Accept
              </div>{" "}
              <div className="p-4 text-[#0C2443] cursor-pointer mont border-2 border-gradient-to-r from-[#0C2443] to-[#2A5687] rounded-3xl py-2 text-sm">
                Reject
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HospitalRequest;
