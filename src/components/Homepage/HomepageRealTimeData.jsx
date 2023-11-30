import React from "react";
import RealTimeDataCard from "./RealTimeDataCard";

function HomepageRealTimeData() {
  return (
    <div className="flex p-12 justify-center gap-4 bg-gray-100">
      <RealTimeDataCard
        text="Approved Camps"
        value={100}
        className="bg-[#B32346]"
      />
      <RealTimeDataCard
        text="Approved Blood Banks"
        value={100}
        className="bg-[#991747]"
      />
      <RealTimeDataCard
        text="Donors Registered"
        value={100}
        className="bg-[#6A0B37]"
      />
      <RealTimeDataCard
        text="Blood Unit Collected"
        value={100}
        className="bg-[#46052D]"
      />
    </div>
  );
}

export default HomepageRealTimeData;
