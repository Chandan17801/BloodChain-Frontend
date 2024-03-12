import React from "react";
import RemainingBlood from "./RemainingBlood";
import About from "./About";
import RequestStatus from "./RequestStatus";

const Dashboard = () => {
  return (
    <div className="flex gap-4 min-h-screen py-8 px-8 bg-gray-100">
      <About />
      <RemainingBlood />
      <RequestStatus />
    </div>
  );
};

export default Dashboard;
