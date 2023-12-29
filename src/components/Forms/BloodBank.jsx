import { React, useState } from "react";
import CheckedCheckBox from "@/components/SVGComponents/CheckedCheckBox";
import UnCheckedCheckBox from "@/components/SVGComponents/UnCheckedCheckBox";
import HeaderStrip from "@/components/UIElements/HeaderStrip";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import axios from "axios";
import OtpBox from "./otp";
import getCurrentLocation from "@/utils/getCurrentLocation";

function BloodBank() {
  const initialState = {
    email: "",
    name: "",
    address: "",
    phone: "",
    fax_no: "",
    licence_no: "",
    licence_image: "",
    from_date: "",
    to_date: "",
    password: "",
    component_facility: "",
    apheresis_facility: "",
    helpline_no: "",
    pincode: "",
    state: "",
    latitude: "",
    longitude: "",
    website: "",
  };
  const [isOtpBoxVisible, setIsOtpBoxVisible] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isLocation, setIsLocation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const component_facility_click_handler = () => {
    setFormData((prevData) => ({
      ...prevData,
      component_facility: !prevData.component_facility,
    }));
  };
  const apheresis_facility_click_handler = () => {
    setFormData((prevData) => ({
      ...prevData,
      apheresis_facility: !prevData.apheresis_facility,
    }));
  };
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
  const imageHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      licence_image: e.target.files[0],
    }));
  };
  const form_submit_handler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = new FormData();

    for (const key in formData) {
      // Append all form fields to FormData
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/bloodbank/signup",
        data
      );
      setIsOtpBoxVisible(true);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <ResponsiveLayout>
      {isOtpBoxVisible && (
        <OtpBox email={formData.email} userType="bloodbank" />
      )}
      <div className="container mt-4 mx-auto w-[70%]">
        <HeaderStrip text="Register As Blood Bank" />
        <form
          className="p-12 px-20 flex flex-col gap-4 mb-8 bg-gray-100 mont"
          onSubmit={form_submit_handler}
        >
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32"> Org. Name</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md"
                type="text"
                name="name"
                placeholder="Organization Name"
              />
            </div>
            <div className="flex items-center">
              <div className="w-32">Phone Number</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md w-48"
                type="text"
                name="phone"
                placeholder="Number"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32"> Email</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md w-48"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center">
              <div className="w-32"> Fax No.</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md w-48"
                type="text"
                name="fax_no"
                placeholder="Fax No."
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32"> Licence No.</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md w-48"
                type="text"
                name="licence_no"
                placeholder="Licence No."
              />
            </div>
            <div className="flex items-center">
              <div className="w-32"> Licence Image</div>
              <input
                onChange={imageHandler}
                className="p-1 border-2 rounded-md w-48"
                type="file"
                name="licence_image"
                placeholder="Licence Image"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32">From Date</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md w-48"
                type="date"
                name="from_date"
              />
            </div>
            <div className="flex items-center">
              <div className="w-32"> To Date</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md w-48"
                type="date"
                name="to_date"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32"> Website</div>
              <input
                className="p-1 border-2 rounded-md w-48"
                type="text"
                onChange={handleChange}
                name="website"
                placeholder="Website"
              />
            </div>
            <div className="flex items-center">
              <div className="w-32"> Helpline No.</div>
              <input
                className="p-1 border-2 rounded-md w-48"
                name="helpline_no"
                onChange={handleChange}
                type="text"
                placeholder="Helpline No."
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32"> Address</div>
              <textarea
                id=""
                cols="19"
                onChange={handleChange}
                rows="05"
                placeholder="Address"
                name="address"
                className="p-1 border-2 rounded-md"
              ></textarea>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <div className="w-32">Password</div>
                <input
                  className="p-1 border-2 rounded-md w-48"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password."
                />
              </div>
              <div className="flex items-center">
                <div className="w-48"> Component Facility</div>
                {formData.component_facility && (
                  <CheckedCheckBox onClick={component_facility_click_handler} />
                )}
                {!formData.component_facility && (
                  <UnCheckedCheckBox
                    onClick={component_facility_click_handler}
                  />
                )}
              </div>
              <div className="flex items-center">
                <div className="w-48">Apheresis Facility</div>
                {formData.apheresis_facility && (
                  <CheckedCheckBox onClick={apheresis_facility_click_handler} />
                )}
                {!formData.apheresis_facility && (
                  <UnCheckedCheckBox
                    onClick={apheresis_facility_click_handler}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32"> Latitude</div>
              <input
                className={`bg-white p-1 border-2 rounded-md w-48 ${
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
                className={`bg-white p-1 border-2 rounded-md w-48 ${
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

          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-32"> Pincode</div>
              <input
                onChange={handleChange}
                className="p-1 border-2 rounded-md mr-16 w-48"
                type="text"
                name="pincode"
                placeholder="pincode"
              />
            </div>
            <div className="flex items-center">
              <div className="w-32">State</div>
              <input
                className="p-1 border-2 rounded-md w-48"
                onChange={handleChange}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>
          </div>
          <div className="" style={{ fontStyle: "italic" }}>
            <input className="mr-2" type="checkbox" name="confirmation" />
            kindly review the above details for submit.
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto disabled:bg-gray-400 justify-center w-48 bg-black flex text-white pl-6 pr-6 pt-2 pb-2 rounded-xl font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1 disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>
      </div>
    </ResponsiveLayout>
  );
}

export default BloodBank;
