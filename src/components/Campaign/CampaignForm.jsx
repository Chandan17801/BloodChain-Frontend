import React, { useState } from "react";
import CrossButton from "../UIElements/CrossButton";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function CampaignForm({ close, addNewCamp }) {
  const { userId } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    campaignName: "",
    campaignDate: "",
    location: "",
    district: "",
    goals: "",
    bloodbankId: userId,
  });

  const [errors, setErrors] = useState({
    campaignName: "",
    campaignDate: "",
    location: "",
    district: "",
    goals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error message when user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check each field for empty value
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const form_submit_handler = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      // If form is not valid, prevent submission
      return;
    }

    try {
      let response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/camps/create",
        formData
      );
      addNewCamp(response.data.data);
      close();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="absolute h-full w-full bg-[#a7a4a480] z-50 top-0 right-0 flex justify-center items-center">
        <ToastContainer />
        <div className="bg-white shadow-lg rounded-md p-[2rem] items-center flex flex-col gap-4 relative">
          <div className="text-4xl font-semibold mont">
            Add New <span className="text-red-900">Campaign</span>
          </div>
          <CrossButton close={close} sign="x" />
          <form
            className="px-8  flex flex-col gap-7 mont items-center"
            onSubmit={form_submit_handler}
          >
            <div className="flex flex-col">
              <div className="flex ">
                <div className="w-32">Campaign Name</div>
                <input
                  onChange={handleChange}
                  className={`p-1 border-2 rounded-md w-64 ${
                    errors.campaignName && "border-red-500"
                  }`}
                  type="text"
                  name="campaignName"
                  placeholder="Campaign Name"
                />
              </div>
              {errors.campaignName && (
                <span className="ml-[8rem] text-red-500">
                  *{errors.campaignName}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex ">
                <div className="w-32">Location</div>
                <input
                  onChange={handleChange}
                  className={`p-1 border-2 rounded-md w-64 ${
                    errors.location && "border-red-500"
                  }`}
                  type="text"
                  name="location"
                  placeholder="Location"
                />
              </div>
              {errors.location && (
                <span className="ml-[8rem] text-red-500">
                  *{errors.location}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex ">
                <div className="w-32">District</div>
                <input
                  onChange={handleChange}
                  className={`p-1 border-2 rounded-md w-64 ${
                    errors.district && "border-red-500"
                  }`}
                  type="text"
                  name="district"
                  placeholder="District"
                />
              </div>
              {errors.district && (
                <span className="ml-[8rem] text-red-500">
                  *{errors.district}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex ">
                <div className="w-32">Date</div>
                <input
                  onChange={handleChange}
                  className={`p-1 border-2 rounded-md w-64 ${
                    errors.campaignDate && "border-red-500"
                  }`}
                  type="date"
                  name="campaignDate"
                  placeholder="Date"
                />
              </div>
              {errors.campaignDate && (
                <span className="ml-[8rem] text-red-500">
                  *{errors.campaignDate}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex ">
                <div className="w-32">Goals</div>
                <textarea
                  onChange={handleChange}
                  className={`p-1 border-2 rounded-md w-64 ${
                    errors.goals && "border-red-500"
                  }`}
                  rows="4"
                  cols="30"
                  name="goals"
                  placeholder="Goals"
                />
              </div>
              {errors.goals && (
                <span className="ml-[8rem] text-red-500">*{errors.goals}</span>
              )}
            </div>
            <button
              type="submit"
              className="mt-3 mx-auto justify-center w-48 bg-black flex text-white pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1"
            >
              Add Campaign
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CampaignForm;
