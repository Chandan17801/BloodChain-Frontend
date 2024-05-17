import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import CrossButton from "../UIElements/CrossButton";
import Loading from "../UIElements/Loading";
import { useSocketContext } from "@/store/SocketContext";

function UserRequestConfirmPopUp({ campaign, close }) {
  const { userId } = useSelector((state) => state.auth);
  const [bloodType, setBloodType] = useState("O+");
  const [loading, setLoading] = useState(false);
  const { socket } = useSocketContext();

  const confirmHandler = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + `/donation/create`,
        {
          userId,
          bloodType: bloodType,
          campaignId: campaign.campaign_id,
          bloodbankId: campaign.bloodbank_id,
        }
      );
      setLoading(false);
      console.log(response.data.message);
      console.log(response.data);
      close();
      if (socket && typeof socket.emit === "function") {
        socket.emit("donationRequest", {
          message: "New donation request",
          userId: userId,
          campaignId: campaign.campaign_id,
          bloodbankId: campaign.bloodbank_id,
        });
      } else {
        console.error(
          "Socket is not properly initialized or emit method is not available."
        );
      }
    } catch (error) {
      setLoading(false);
      // toast.error(error);
      alert(error.response.data.message);
      console.error("Error fetching data:", error);
    }
  };

  console.log(campaign);
  return (
    <>
      {loading && <Loading />}
      <div className="absolute h-[100vh] w-[100%] bg-[#a7a4a480] z-9 top-0 right-0 flex justify-center items-center">
        <div className="relative bg-white shadow-lg rounded-md p-[4rem] items-center flex flex-col gap-4">
          <CrossButton close={close} sign="x" />
          <div className="text-4xl font-semibold mont">
            Confirm your request
          </div>
          <div className="mont text-gray-600">
            to donate blood to
            <span className="text-xl font-semibold text-red-600">
              {campaign.name}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="merri text-gray-600">Confirm Your Blood Type:</div>
            <select
              name="blood_group"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="p-1 border-2 border-gray-400 rounded-md text-red-500"
            >
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="B-">B-</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
            </select>
          </div>
          <button
            onClick={confirmHandler}
            className="p-4 text-white mont bg-black rounded-3xl py-2"
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default UserRequestConfirmPopUp;
