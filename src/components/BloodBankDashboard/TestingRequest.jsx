import React from "react";

const TestingRequest = ({ approvedRequests }) => {
  // console.log(approvedRequests);

  return (
    <div className="flex flex-col flex-[2] gap-4 bg-transparent p-4">
      <div className="pl-2 font-semibold self-start text-lg mont text-gray-500">
        Approved Requests
      </div>
      <div style={{ overflowY: "auto", maxHeight: "200px" }}>
        {approvedRequests.map((request, index) => (
          <div
            className="p-4 flex flex-row rounded-xl bg-white shadow-md shadow-gray-300"
            key={index}
          >
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingRequest;
