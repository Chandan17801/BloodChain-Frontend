import React from "react";
import CrossButton from "../UIElements/CrossButton";
import Image from "next/image";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TestingPopUp = ({ donationId, close, bloodSample, setBloodSample }) => {
  console.log(donationId);
  return (
    <>
      <ToastContainer />
      <div className="absolute h-full w-full bg-[#a7a4a480] z-50 top-0 right-0 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-md p-[2rem] items-center flex flex-col gap-4 relative">
          <div className="text-4xl font-semibold mont">
            Sample <span className="text-red-900">Test</span>
          </div>
          <CrossButton close={close} sign="x" />
          <div
            className="flex flex-col gap-7 mont pt-2"
            // onSubmit={acceptHandler}
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 pl-2">
                <div className="text-gray-500 font-thin text-xl">
                  <span className="text-lg text-black">User Id : </span>
                  {donationId}
                </div>
                {/* <div className="font-bold text-2xl w-64">{request.name}</div>
            <div>
              <span>Age : </span>
              {request.age}
            </div>
            <div className="text-red-900 text-3xl font-semibold">
              {request.blood_group}
            </div> */}
                {/* <div className="text-black">{request.last_donation}</div> */}
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
            <div className="flex flex-col">
              <div>Reason If Decline :</div>
              <textarea
                //   onChange={reasonChange}
                className="p-1 border-2 rounded-md"
                type="text"
                cols="30"
                rows="4"
                name="reason"
                placeholder="Reason"
              />
            </div>
            <div className="flex">
              <div
                onClick={async () => {
                  try {
                    let response = await axios.patch(
                      process.env.NEXT_PUBLIC_SERVER_URL +
                        `/donation/test/${donationId}`,
                      { status: "2" }
                    );
                    let newBloodSample = bloodSample.map((sample) => {
                      if (sample.donation_id === donationId)
                        return { ...sample, teststatus: 2 };
                      else return sample;
                    });
                    setBloodSample(newBloodSample);
                    close();
                  } catch (error) {
                    console.error("Error:", error);
                  }
                }}
                className="mx-auto cursor-pointer justify-center w-40 bg-red-900 flex text-white pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1"
              >
                Reject
              </div>
              <button
                onClick={async () => {
                  try {
                    let response = await axios.patch(
                      process.env.NEXT_PUBLIC_SERVER_URL +
                        `/donation/test/${donationId}`,
                      { status: "1" }
                    );
                    let newBloodSample = bloodSample.map((sample) => {
                      if (sample.donation_id === donationId)
                        return { ...sample, teststatus: 1 };
                      else return sample;
                    });
                    setBloodSample(newBloodSample);
                    toast.success("request accepted");
                    close();
                  } catch (error) {
                    console.error("Error:", error);
                  }
                }}
                className="mx-auto justify-center w-40 bg-green-600 flex text-white pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingPopUp;
