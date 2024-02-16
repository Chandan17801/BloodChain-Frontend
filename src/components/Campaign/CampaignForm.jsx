import React, { useState } from "react";
import CrossButton from "../UIElements/CrossButton";
import { useSelector } from "react-redux";
import axios from "axios";

function CampaignForm({ close, addNewCamp }) {
  const { userType, userId, token, email } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    campaignName: "",
    campaignDate: "",
    location: "",
    goals: "",
    bloodbankId: userId,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const form_submit_handler = async (event) => {
    console.log(formData);
    event.preventDefault();
    try {
      let response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/camps/create",
        formData
      );
      addNewCamp(response.data.data)
    } catch (error) {
      console.error("Error:", error);
    }
    close();
  };
  return (
    <div className="absolute h-full w-full bg-[#a7a4a480] z-50 top-0 right-0 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-md p-[2rem] items-center flex flex-col gap-4 relative">
        <div className="text-4xl font-semibold mont">
          Add New <span className="text-red-900">Campaign</span>
        </div>
        <CrossButton close={close} sign="x" />
        <form
          className="px-8  flex flex-col gap-7 mb-8 mont items-center"
          onSubmit={form_submit_handler}
        >
          <div className="flex ">
            <div className="w-32">Campaign Name</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="text"
              name="campaignName"
              placeholder="Campaign Name"
            />
          </div>
          <div className="flex ">
            <div className="w-32">Location</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="text"
              name="location"
              placeholder="location"
            />
          </div>
          <div className="flex ">
            <div className="w-32">Date</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="date"
              name="campaignDate"
              placeholder="Date"
            />
          </div>
          <div className="flex ">
            <div className="w-32">Goals</div>
            <textarea
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="textarea"
              rows="4"
              cols="30"
              name="goals"
              placeholder="Goals"
            />
          </div>

          <div className="" style={{ fontStyle: "italic" }}>
            <input className="mr-2" type="checkbox" name="confirmation" />
            kindly review the above details for submit.
          </div>
          <button
            type="submit"
            className="mx-auto justify-center w-48 bg-black flex text-white pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1"
          >
            Add Campaign
          </button>
        </form>
      </div>
    </div>
  );
}

export default CampaignForm;
