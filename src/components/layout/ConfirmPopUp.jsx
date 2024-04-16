import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import CrossButton from "../UIElements/CrossButton";

function ConfirmPopUp({ bank, close }) {
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  const [amount, setAmount] = useState(1);
  const [bloodType, setBloodType] = useState("O+");
  console.log(bank);

  const confirmHandler = async () => {
    console.log(userType, bank);
    console.log(amount);
    console.log(bloodType);
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + `/request/create`,
        {
          hospitalId: userId,
          // name: ,
          bloodType: bloodType,
          quantity: amount,
          bloodbankId: bank.uid,
        }
      );
      // setProfile(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log(bank);
  return (
    <div className="absolute h-[100vh] w-[100%] bg-[#a7a4a480] z-50 top-0 right-0 flex justify-center items-center">
      <div className="relative bg-white shadow-lg rounded-md p-[4rem] items-center flex flex-col gap-4">
        <CrossButton close={close} sign="x" />
        <div className="text-4xl font-semibold mont">Confirm your request</div>
        <div className="mont text-gray-600">
          for blood from{" "}
          <span className="text-xl font-semibold text-red-600">
            {bank.name}.
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="merri text-gray-600">
            Enter the units of blood required:
          </div>
          <input
            className="border-2 rounded-md border-gray-400 w-12 p-1 text-center text-black"
            type="text"
            name="unit"
            placeholder="2"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="merri text-gray-600">Enter Blood Type:</div>
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
  );
}

export default ConfirmPopUp;
