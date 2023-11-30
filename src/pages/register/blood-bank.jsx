import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeaderStrip from "@/components/UIElements/HeaderStrip";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import { React, useState } from "react";

function bloodbank() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    fax_no: "",
    licence_no: "",
    licence_image: "",
    from_date: "",
    to_date: "",
    component_facility: "",
    apheresis_facility: "",
    helpline_no: "",
    pincode: "",
    state: "",
    latitude: "",
    longitude: "",
    website: "",
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
        <HeaderStrip text="Register As Blood Bank" />
        <form
          className="p-12 flex flex-col gap-7 mb-8 bg-gray-100 mont"
          onSubmit={form_submit_handler}
        >
          <div className="flex">
            <div className="w-32"> Org. Name</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md mr-16 w-64"
              type="text"
              name="name"
              placeholder="Organization Name"
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
            <div className="w-32"> Fax No.</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="number"
              name="fax_no"
              placeholder="Fax No."
            />
          </div>
          <div className="flex">
            <div className="w-32"> Licence No.</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md mr-16 w-64"
              type="number"
              name="licence_no"
              placeholder="Licence No."
            />
            <div className="w-32"> Licence Image</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="image"
              name="licence_image"
              placeholder="Licence Image"
            />
          </div>
          <div className="flex">
            <div className="w-32">From Date</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md mr-16 w-64"
              type="date"
              name="from_date"
            />
            <div className="w-32"> To Date</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="date"
              name="to_date"
            />
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col gap-7">
              <div className="flex">
                <div className="w-32"> Address</div>
                <textarea
                  id=""
                  cols="30"
                  onChange={handleChange}
                  rows="06"
                  placeholder="Address"
                  name="address"
                  className="p-1 border-2 rounded-md"
                ></textarea>
              </div>
              <div className="flex">
                <div className="w-32"> Website</div>
                <input
                  className="p-1 border-2 rounded-md w-64"
                  type="text"
                  onChange={handleChange}
                  name="website"
                  placeholder="Website"
                />
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="flex">
                <div className="w-48"> Component Facility</div>
                <input
                  onChange={handleChange}
                  className="p-1 border-2 rounded-md w-64"
                  type="checkbox"
                  name="component_facility"
                />
              </div>
              <div className="flex">
                <div className="w-48">Apheresis Facility</div>
                <input
                  onChange={handleChange}
                  className="p-1 border-2 rounded-md w-64"
                  type="checkbox"
                  name="apheresis_facility"
                />
              </div>
              <div className="flex">
                <div className="w-32"> Helpline No.</div>
                <input
                  className="p-1 border-2 rounded-md w-64"
                  name="helpline_no"
                  onChange={handleChange}
                  type="Number"
                  placeholder="Helpline No."
                />
              </div>
              <div className="flex">
                <div className="w-32"> Latitude</div>
                <input
                  className="p-1 border-2 rounded-md w-64"
                  name="latitude"
                  onChange={handleChange}
                  type="Number"
                  placeholder="Latitude"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-32"> Pincode</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md mr-16 w-64"
              type="number"
              name="pincode"
              placeholder="pincode"
            />
            <div className="w-32"> Longitude</div>
            <input
              onChange={handleChange}
              className="p-1 border-2 rounded-md w-64"
              type="number"
              name="longitude"
              placeholder="Longitude"
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
            <input className="mr-2 ml-14" type="checkbox" />
            <div style={{ fontStyle: "italic" }}>
              {" "}
              Get Your current location
            </div>
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

export default bloodbank;
