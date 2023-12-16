import axios from "axios";
import React, { useRef, useState, useEffect } from "react";

function OtpBox({ email, password, onLogin }) {
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [timeRemaining, setTimeRemaining] = useState(600);
  const boxes = new Array(6).fill(null);
  boxes[0] = useRef();
  boxes[1] = useRef();
  boxes[2] = useRef();
  boxes[3] = useRef();
  boxes[4] = useRef();
  boxes[5] = useRef();

  console.log(boxes);

  const handleInput = (index, event) => {
    const value = event.target.value;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && index < boxes.length - 1) {
      boxes[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !event.target.value) {
      const newOtpValues = [...otpValues];
      newOtpValues[index - 1] = "";
      setOtpValues(newOtpValues);

      if (index > 0) {
        boxes[index - 1].current.focus();
      }
    }
  };

  const onClickSubmitHandler = async (event) => {
    event.preventDefault();
    const otp = otpValues.join("");
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
    }
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="absolute h-full w-[100%] bg-[#a7a4a480] z-50 top-0 right-0 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-md p-[6rem] px-[8rem]">
        <div className="text-center text-3xl font-semibold mb-6">
          OTP Verification
        </div>
        <div className="text-center text-gray-500">An OTP has been sent to</div>
        <div className="text-center text-gray-500">*******@gmail.com</div>
        <div className="flex justify-between mx-[1rem] my-[1rem] text-xl">
          {boxes.map((box, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={box}
              value={otpValues[index]}
              className="w-[2rem] border-gray-400  border-2"
              onChange={(event) => handleInput(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
            />
          ))}
        </div>
        <div className="mx-[1rem] flex gap-3">
          <span className="text-gray-700">Enter the OTP in</span>
          <span className="text-red-600 ">{formatTime(timeRemaining)}</span>
          <p className="text-green-500 ml-4"> Resend Otp</p>
        </div>
        <div
          className="bg-[#610834] font-semibold w-[12rem] px-[1rem] py-2 text-center text-md cursor-pointer text-white rounded-md mx-auto mt-[2rem]"
          onClick={onClickSubmitHandler}
        >
          Verify & Proceed
        </div>
      </div>
    </div>
  );
}

export default OtpBox;
