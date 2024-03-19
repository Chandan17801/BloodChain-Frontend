import { useState } from "react";
import CrossButton from "../UIElements/CrossButton";
import Image from "next/image";
import React from "react";
import axios from "axios";

function RequestVerify({ request, close, acceptHandler, rejectHandler}) {
  console.log(request.donation_id);
 
  return (
    <div className="absolute h-full w-full bg-[#a7a4a480] z-50 top-0 right-0 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-md p-[2rem] items-center flex flex-col gap-4 relative">
        <div className="text-4xl font-semibold mont">
          Verify <span className="text-red-900">Request</span>
        </div>
        <CrossButton close={close} sign="x" />
        <form
          className="flex flex-col gap-7 mont pt-2"
          onSubmit={acceptHandler}
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-2 pl-2">
              <div className="text-gray-500 font-thin text-xl">
                <span className="text-lg text-black">User Id : </span>
                {request.user_id}
              </div>
              <div className="font-bold text-2xl w-64">{request.name}</div>
              <div>
                <span>Age : </span>
                {request.age}
              </div>
              <div className="text-red-900 text-3xl font-semibold">
                {request.blood_group}
              </div>
              <div className="text-black">{request.last_donation}</div>
            </div>
            <Image
              onClick={() => setIsCampaignFormOpen(true)}
              className="w-32"
              src={require("../../assests/profile_dummy_image.jpeg")}
              height={300}
              width={300}
              alt="plus-sign"
            ></Image>
          </div>
          {/* <div className="flex flex-col">
            <div>Reason If Decline :</div>
            <textarea
              onChange={reasonChange}
              className="p-1 border-2 rounded-md"
              type="text"
              cols="30"
              rows="4"
              name="reason"
              placeholder="Reason"
            />
          </div> */}
          <div className="flex">
            <div
              onClick={rejectHandler}
              className="mx-auto cursor-pointer justify-center w-40 bg-red-900 flex text-white pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1"
            >
              Reject
            </div>
            <button
              type="submit"
              className="mx-auto justify-center w-40 bg-green-600 flex text-white pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1"
            >
              Accept
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestVerify;
