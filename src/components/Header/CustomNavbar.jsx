import React, { useEffect, useState } from "react";
import Link from "next/link";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import NotificationBox from "../layout/NotificationBox";
import { logout } from "@/store/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Router from "next/router";
import Image from "next/image";
import { useSocketContext } from "@/store/SocketContext";
import showNotification from "@/utils/showNotification";

const CustomNavBar = () => {
  const [isNotificationBoxOpen, setIsNotificationBoxOpen] = useState(false);
  const { userType, userId } = useSelector((state) => state.auth);
  const { socket } = useSocketContext();
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      socket.on("donationRequest", (data) => {
        console.log("notification received");
        console.log(data);
        showNotification(data);
      });
      socket.on("donationResponse", (data) => {
        console.log("Donation request accepted/reject");
        console.log(data);
        showNotification(data);
      });
      socket.on("bloodRequest", (data) => {
        console.log("Recieved hospital request ");
        console.log(data);
        showNotification(data);
      });
      socket.on("bloodResponse", (data) => {
        console.log("accept/reject hospital request ");
        console.log(data);
        showNotification(data);
      });
    }

    return () => {
      if (socket) socket.off("newRequest");
    };
  }, [socket]);

  return (
    <ResponsiveLayout>
      {isNotificationBoxOpen && <NotificationBox />}
      <nav className="flex bg-gray-800 p-4 z-50 gap-4">
        <Link
          href="/"
          className="text-white hover:bg-gray-600 px-3 py-2 cursor-pointer rounded"
        >
          Home
        </Link>
        {userType === "hospital" && (
          <Link
            href="/searchBloodBank"
            className="text-white hover:bg-gray-600 px-3 py-2 cursor-pointer rounded"
          >
            Search Bloodbank
          </Link>
        )}
        {userType !== "bloodbank" &&
          userType !== "hospital" &&
          userType !== null && (
            <Link
              href="/searchCamps"
              className="text-white hover:bg-gray-600 px-3 py-2 rounded"
            >
              Search Camps
            </Link>
          )}
        {userId && (
          <Link
            href={`/${userType}/dashboard`}
            className="text-white hover:bg-gray-600 px-3 py-2 rounded"
          >
            Dashboard
          </Link>
        )}
        {userType === "bloodbank" && (
          <Link
            href="/bloodbank/campaign"
            className="text-white hover:bg-gray-600 px-3 py-2 rounded"
          >
            Campaign
          </Link>
        )}
        {!userId ? (
          <Link
            href="/login"
            className="text-white hover:bg-gray-600 px-3 py-2 rounded"
          >
            Login
          </Link>
        ) : (
          <button
            className="text-white hover:bg-gray-600 px-3 py-2 rounded"
            onClick={() => {
              Router.replace({ pathname: "/" });
              dispatch(logout());
            }}
          >
            Logout
          </button>
        )}
        <Link
          href="/map"
          className="text-white bg-[#6a0c3a] hover:bg-gray-600 px-3 py-2 rounded ml-auto flex gap-2"
        >
          <Image src={require("../../assests/map.png")} alt=""></Image>
          Map Find
        </Link>
      </nav>
    </ResponsiveLayout>
  );
};

export default CustomNavBar;
