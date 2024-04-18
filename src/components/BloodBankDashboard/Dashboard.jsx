import React, { useState } from "react";
import BloodChart from "@/components/UIElements/BloodChart";
import last_donations from "@/styles/donations";
import { useEffect } from "react";
import TestingRequest from "./TestingRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import Loading from "../UIElements/Loading";
import Inventrory from "./Inventrory";
import About from "./About";
import HospitalRequest from "./HospitalRequest";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [approvedRequest, setApprovedRequest] = useState([]);
  const [pendingRequest, setPendingRequest] = useState([]);
  const { userType, userId, token, email } = useSelector((state) => state.auth);

  useEffect(() => {
    toast("Welcome Your are logged in");
    const fetchRequest = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/request/${userId}`
        );
        let data = response.data.data.filter(
          (request) => request.request_status == "Approved"
        );
        setApprovedRequest(data);
        data = [];
        data = response.data.data.filter(
          (request) => request.request_status == "Requested"
        );
        setPendingRequest(data);
        console.log(response.data);
        console.log(approvedRequest);
        console.log(pendingRequest);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchRequest();
  }, []);

  return (
    <ResponsiveLayout>
      <ToastContainer />
      {loading && <Loading />}
      <div className="flex gap-4 min-h-screen py-8 px-8 bg-[#F7F8FA]">
        <div className="flex flex-col flex-[5] gap-4">
          <Inventrory />
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <About />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex-1">
                <BloodChart />
              </div>
              <TestingRequest requests={approvedRequest} />
            </div>
          </div>
        </div>
        <HospitalRequest requests={pendingRequest} />
      </div>
    </ResponsiveLayout>
  );
}
