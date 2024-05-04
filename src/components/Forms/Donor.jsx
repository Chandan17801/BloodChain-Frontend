import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderStrip from "@/components/UIElements/HeaderStrip";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import { React, useState } from "react";
import axios from "axios";
import OtpBox from "./otp";
import { useDispatch } from "react-redux";
import getCurrentLocation from "@/utils/getCurrentLocation";
import Router from "next/router";
import { login } from "@/store/auth";

function Donor() {
  const dispatch = useDispatch();

  const initialState = {
    email: "",
    password: "",
    phone: "",
    name: "",
    address: "",
    date_of_birth: "",
    blood_group: "O+",
    district: "",
    state: "",
    pincode: "",
    aadhaar_no: "",
    latitude: "",
    longitude: "",
  };
  const [isOtpBoxVisible, setIsOtpBoxVisible] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const getLocation = async () => {
    const location = await getCurrentLocation();
    setFormData((prevData) => ({
      ...prevData,
      longitude: location.lon,
      latitude: location.lat,
    }));
    setIsLocation(true);
    // console.log(formData);
  };
  const form_submit_handler = async (event) => {
    event.preventDefault();
    try {
      // let data = JSON.stringify(formData)
      let response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/users/signup",
        formData
      );
      // console.log("Response:", response);
      dispatch(
        login({
          userType: "users",
          userId: response.data.id,
          token: response.data.token,
          email: response.email,
        })
      );
      Router.replace({ pathname: `/users/dashboard` });

      // setIsOtpBoxVisible(true);
      // console.log(isOtpBoxVisible);
      // setFormData(initialState);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <ResponsiveLayout>
      {isOtpBoxVisible && <OtpBox email={formData.email} userType="users" />}

      <div className="container mt-4 mx-auto w-[70%]">
        <HeaderStrip text="Register As Donor" />
        <form
          className="p-12 flex flex-col gap-7 mb-8  bg-gray-100 mont"
          onSubmit={form_submit_handler}
        >
          <div className="flex">
            <div className="w-32"> Full Name</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md mr-16 w-64"
              type="text"
              name="name"
              placeholder="Name"
            />
            <div className="w-32"> Phone Number</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="text"
              name="phone"
              placeholder="Number"
            />
          </div>
          <div className="flex">
            <div className="w-32"> Email</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md mr-16 w-64"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="w-32"> Password</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col gap-7">
              <div className="flex">
                <div className="w-32"> Address</div>
                <textarea
                  id=""
                  cols="23"
                  onChange={handleChange}
                  rows="06"
                  placeholder="Address"
                  name="address"
                  className="p-1 border-2 rounded-md"
                ></textarea>
              </div>
              <div className="flex">
                <div className="w-32"> District</div>
                <input
                  className="p-1 border-2 rounded-md w-64"
                  type="text"
                  onChange={handleChange}
                  name="district"
                  placeholder="District"
                />
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex">
                <div className="w-32"> Date of Birth</div>
                <input
                  onChange={handleChange}
                  className="p-1 border-2 rounded-md w-64"
                  type="Date"
                  placeholder="Date of Birth"
                  name="date_of_birth"
                />
              </div>
              <div className="flex">
                <div className="w-32"> Blood Group</div>
                <select
                  name="blood_group"
                  onChange={handleChange}
                  className="p-1 border-2 rounded-md w-64"
                >
                  <option selected value="O+">
                    O+
                  </option>
                  <option value="O-">O-</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                </select>
              </div>
              <div className="flex">
                <div className="w-32"> Aadhaar No.</div>
                <input
                  className="p-1 border-2 rounded-md w-64"
                  name="aadhaar_no"
                  onChange={handleChange}
                  type="text"
                  placeholder="Aadhaar No."
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center">
              <div className="w-32"> Latitude</div>
              <input
                className={`bg-white p-1 border-2 rounded-md w-64 mr-16 ${
                  isLocation ? "cursor-not-allowed" : ""
                }`}
                name="latitude"
                onChange={handleChange}
                value={formData.latitude}
                disabled={isLocation}
                type="text"
                placeholder="Latitude"
              />
            </div>
            <div className="flex items-center">
              <div className="w-32"> Longitude</div>
              <input
                onChange={handleChange}
                className={`bg-white p-1 border-2 rounded-md w-64 ${
                  isLocation ? "cursor-not-allowed" : ""
                }`}
                type="text"
                value={formData.longitude}
                disabled={isLocation}
                name="longitude"
                placeholder="Longitude"
              />
            </div>
          </div>
          <div className="flex">
            <input
              className={`mr-2 ${
                !isLocation ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              type="checkbox"
              disabled={isLocation}
              onClick={getLocation}
            />
            <div style={{ fontStyle: "italic" }}>
              {" "}
              Get Your current location
            </div>
          </div>
          <div className="flex">
            <div className="w-32"> PinCode</div>
            <input
              className="p-1 border-2 rounded-md w-64"
              onChange={handleChange}
              type="text"
              name="pincode"
              placeholder="pincode"
            />
          </div>
          <div className="flex">
            <div className="w-32">State</div>
            <input
              className="p-1 border-2 rounded-md w-64"
              onChange={handleChange}
              name="state"
              type="text"
              placeholder="State"
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
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </ResponsiveLayout>
  );
}

export default Donor;
