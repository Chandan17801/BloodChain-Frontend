import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderStrip from "@/components/UIElements/HeaderStrip";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import { React, useState } from "react";

function donor() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    address: "",
    date_of_birth: "",
    blood_group: "",
    district: "",
    state: "",
    pincode: "",
    aadhaar_no: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const form_submit_handler = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <ResponsiveLayout>
      <Header />
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
              type="number"
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
                  cols="26"
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
                  <option value="">B+</option>
                  <option value="">O+</option>
                  <option value="">A-</option>
                  <option value="">B-</option>
                </select>
              </div>
              <div className="flex">
                <div className="w-32"> Aadhaar No.</div>
                <input
                  className="p-1 border-2 rounded-md w-64"
                  name="aadhaar_no"
                  onChange={handleChange}
                  type="Number"
                  placeholder="Aadhaar No."
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-32"> PinCode</div>
            <input
              className="p-1 border-2 rounded-md w-64"
              onChange={handleChange}
              type="Number"
              name="pincode"
              placeholder="pincode"
            />
          </div>
          {/* <div className="flex">
            <div className="w-32"> Longitude</div>
            <input
              className="p-1 border-2 rounded-md w-64"
              onChange={handleChange}
              type="Number"
              name="longitude"
              placeholder="Longitude"
            />
          </div>
          <div className="flex">
            <div className="w-32"> Latitude</div>
            <input
              className="p-1 border-2 rounded-md w-64"
              type="Number"
              onChange={handleChange}
              name="latitude"
              placeholder="Latitude"
            />
          </div> */}
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

export default donor;
