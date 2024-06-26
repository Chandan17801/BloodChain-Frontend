import React, { useEffect, useState } from "react";
import BloodSampleGraph from "./BloodSampleGraph";
import axios from "axios";
import Image from "next/image";

function DonationHistory({ userId, blocked, setLoading }) {
  const [selectedDonationId, setSelectedDonationId] = useState();
  const [lastDonations, setLastDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + `/donation/users/${userId}`
        );
        setLastDonations(response.data);
        if (response.data.length > 0) {
          setSelectedDonationId(response.data[0]._id);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId, setLoading]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="bg-white rounded-lg p-4 shadow-gray-300 shadow-md mont flex-1">
          <div className="flex justify-between mb-4">
            <div className="pl-2 font-semibold self-center">
              Donation History
            </div>
            <div className="text-sm text-red-500 bg-red-100 rounded-md px-4 py-1 cursor-pointer">
              Click to track
            </div>
          </div>
          <div
            className="flex flex-col text-xs min-h-[115px]"
            style={{ overflowY: "auto", maxHeight: "115px" }}
          >
            {lastDonations.map((donation, index) => (
              <div
                onClick={() => {
                  setSelectedDonationId(donation.donation_id);
                  setLoading(true);
                }}
                className={`flex justify-between p-4 py-[12px] rounded-md ${
                  index % 2 == 0 ? "bg-gray-100" : "white"
                } cursor-pointer`}
                key={index}
              >
                <div>{donation.donation_date.substring(0, 10)}</div>
                <div>{donation.campaign_location}</div>
              </div>
            ))}
          </div>
        </div>
        {blocked != null && (
          <div className="flex mont flex-1 justify-center items-center">
            <Image
              className="w-[60%]"
              src={require("../../assests/blocked.png")}
              height={200}
              width={300}
              alt="blocked"
            ></Image>
          </div>
        )}
      </div>
      {selectedDonationId && (
        <BloodSampleGraph
          donationId={selectedDonationId}
          setLoading={setLoading}
        />
      )}
    </div>
  );
}

export default DonationHistory;
