import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../UIElements/Loading";

const RequestStatus = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/request/hospital/${userId}`
        );
        // setProfile(response.data);
        console.log(response.data);
        setRequests(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <>
      {loading && <Loading />}
      <div className="flex-[3] rounded-md shadow-lg shadow-gray-400 bg-white">
        <div className="mont p-4 pb-2 text-[#6a0c3a] font-bold ">
          REQUEST STATUS
        </div>
        <div
          className="p-4 flex flex-col gap-3"
          style={{ overflowY: "auto", maxHeight: "750px" }}
        >
          {requests.map((request, index) => (
            <div
              key={index}
              className="bg-[#f5dce2] p-4 rounded-md shadow-md shadow-[#b42347] w-full flex gap-2 flex-col"
            >
              <div className="flex justify-between items-center">
                <div className="merri text-[#6a0c3a] text-lg">
                  {request.bloodbank_name}
                </div>
                <div className="text-sm mont text-gray-500">
                  {request.request_id}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col ">
                  <div className="flex gap-2">
                    <div className="text-sm mont text-gray-700">
                      {" "}
                      Requested :
                    </div>
                    <div className="mtext-sm mont text-gray-500 text-sm">
                      {request.request_date.substring(0, 10)}
                    </div>
                  </div>
                  {request.approval_time && (
                    <div className="flex gap-2">
                      <div className="text-sm mont text-gray-700">
                        {" "}
                        Approval :
                      </div>
                      <div className="mtext-sm mont text-gray-500 text-sm">
                        {request?.approval_time.substring(0, 10)}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 justify-center items-center">
                  <div className="text-sm mont text-gray-700"> Status :</div>
                  <div
                    className={`p-1 rounded-sm ${
                      request.request_status == "Requested"
                        ? "text-yellow-400 shadow-yellow-300 bg-yellow-100"
                        : "text-green-600 shadow-green-300 bg-green-100 "
                    } shadow-md`}
                  >
                    {request.request_status}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="text-sm mont text-gray-700"> Blood Type</div>
                  <div className="mtext-sm mont text-gray-500 text-sm">
                    {request.blood_type}
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
    </>
  );
};

export default RequestStatus;
