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

export default function Dashboard() {
  const [loading,setLoading] = useState(true);
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  useEffect(() => {
    // Function to fetch data from the API
    // toast("Logged In");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/bloodbank/bloodbank/${userId}`
        );
        // setProfile(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally{
        setLoading(false)
      }
    };
    
    fetchData();
    
  }, [userId]);
  useEffect(() => {
    toast("Welcome Your are logged in");
  }, []);

  return (
    <ResponsiveLayout>
      <ToastContainer />
      {loading && <Loading/>}
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
              <TestingRequest />
            </div>
          </div>
        </div>
        <HospitalRequest />
      </div>
    </ResponsiveLayout>
  );
}
