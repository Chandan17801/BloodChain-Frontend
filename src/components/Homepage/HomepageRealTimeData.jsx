import React, { useEffect, useState } from "react";
import RealTimeDataCard from "./RealTimeDataCard";
import axios from "axios";

function HomepageRealTimeData() {
  const [donor, setDonor] = useState();
  const [bloodbank, setBloodbank] = useState();
  const [camps, setCamps] = useState();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + "/users/all"
        );
        setDonor(response.data.users.length);
        response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + "/bloodbank/all"
        );
        setBloodbank(response.data.users.length);
        response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + "/camps/all"
        );
        setCamps(response.data.campaigns.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="flex p-12 justify-center gap-4 bg-gray-100 mont">
      <RealTimeDataCard
        text="Approved Camps"
        value={camps ? camps : 0}
        className="bg-[#B32346]"
      />
      <RealTimeDataCard
        text="Approved Blood Banks"
        value={bloodbank ? bloodbank : 0}
        className="bg-[#991747]"
      />
      <RealTimeDataCard
        text="Donors Registered"
        value={donor ? donor : 0}
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
