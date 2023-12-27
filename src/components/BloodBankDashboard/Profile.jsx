import React, { useState,useEffect } from 'react'

function Profile() {
  const [profile,setProfile] = useState({
    email: "dummy@example.com",
    name: "xyzBlood Bank",
    address: "shivaji Nagar",
    phone: "123456789",
    fax_no: "45278",
    licence_no: "37GG3784s",
    licence_image: "chandannn",
    from_date: "2000-01-09",
    to_date: "2025-01-01",
    password: "lawdeKaPassword1",
    component_facility: "true",
    apheresis_facility: "true",
    helpline_no: "786",
    pincode: "222002",
    state: "Uttar Pradesh",
    latitude: "24.7128",
    longitude: "72.45",
    website: "",

  });
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_SERVER_URL + "/bloodbank/bloodbank/2"
        );
        // setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-4 min-h-screen py-8 px-20 bg-gray-100">
      <div className="flex flex-col flex-[3] gap-4">
        <div className="p-4 bg-white rounded-lg flex shadow-md shadow-gray-300 mont">
          <div className="flex-[4] flex items-center">
            <div className="w-20 h-24 rounded-xl">
              {/* <Image
                className="w-full"
                src={require("../../assests/profile_dummy_image.jpeg")}
                height={300}
                width={300}
                alt={profile.name}
              ></Image> */}
            </div>
            <div className="text-2xl pl-4 font-semibold">{profile.name}</div>
          </div>
          <div className="flex-[1] flex flex-col justify-center items-center gap-2">
            {/* <div className="text-4xl font-bold text-red-600">
              {profile.blood_group}
            </div> */}
            <div className="font-light bg-gray-100 px-4 py-1 rounded-md text-sm">
              {profile.licence_no} 
            </div>
          </div>
        </div>
        <div className="p-4 mont bg-white rounded-lg flex flex-col shadow-md shadow-gray-300 items-center w-full text-xs">
          <div className="font-semibold text-xl">About</div>
          <div className="flex gap-8 py-4 w-[80%]">
            <div className="flex flex-col flex-[3]">
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                Name
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                Email
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                Phone
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                Licence Time
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              component_facility
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              apheresis_facility
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                Pincode
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              fax_no
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                State
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
                Address
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              Licence No.
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-right pb-1 text-gray-700">
              helpline_no
              </div>
            </div>
            <div className="flex flex-col flex-[4]">
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.name}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.email}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.phone}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.from_date } - {profile.to_date}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.component_facility}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.apheresis_facility}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.pincode}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.fax_no}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.state}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.address}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.licence_no}
              </div>
              <div className="border-b-[1px] border-gray-300 w-full text-left pb-1 text-gray-700 font-thin">
                {profile.helpline_no}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-[2]">
        <div className="bg-white rounded-lg p-4 shadow-gray-300 shadow-md mont">
          <div className="flex justify-between mb-4">
            <div className="pl-2 font-semibold self-center">
              Donation History
            </div>
            <div className="text-sm text-red-500 bg-red-100 rounded-md px-4 py-1 cursor-pointer">
              View All &raquo;
            </div>
          </div>
          <div className="flex flex-col text-xs">
            <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
              <div>{last_donations[0].date}</div>
              <div>{last_donations[0].address}</div>
            </div>
            <div className="flex justify-between p-4 py-[12px] rounded-md">
              <div>{last_donations[1].date}</div>
              <div>{last_donations[1].address}</div>
            </div>
            <div className="flex justify-between p-4 py-[12px] rounded-md bg-gray-100">
              <div>{last_donations[2].date}</div>
              <div>{last_donations[2].address}</div>
            </div>
          </div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}
   
export default Profile
