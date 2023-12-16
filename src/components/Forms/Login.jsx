import React from "react";
import BlackButton from "@/components/UIElements/BlackButton";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import Link from "next/link";
import loginImg from "@/assests/login_image_creative.jpg";
import Image from "next/image";
import axios from "axios";

export default function Login() {
  const [loginUser, setLoginUser] = useState("donor");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loginUserHandler = (e) => {
    setLoginUser(e.target.id);
    console.log(e.target.id);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let response = null;
    if (loginUser == "donor") {
      response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/users/login",
        formData
      );
    } else if (loginUser == "blood_bank") {
      response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/bloodbank/login",
        formData
      );
    } else {
      response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER_URL + "/hospital/login",
        formData
      );
    }
    try {
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ResponsiveLayout>
      <div
        className="flex justify-center items-center h-[100vh]"
        style={{
          backgroundImage: `url(${loginImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex w-[45rem] h-[60%]">
          <div className="w-[55%] bg-red-100 rounded-l-md flex flex-col gap-6 justify-center items-center shadow-md shadow-red-100">
            <div className="text-3xl merri font-semibold text-center text-[#ac2828]">
              Login to Your Account
            </div>
            <div className="w-[70%] flex justify-around text-[#ac28284a] text-xs">
              <div
                className={`cursor-pointer ${
                  loginUser == "donor"
                    ? "text-[#b43232] border-b-2 border-b-red-700"
                    : ""
                }`}
                id="donor"
                onClick={loginUserHandler}
              >
                As Donor
              </div>
              <div
                id="blood_bank"
                className={`cursor-pointer ${
                  loginUser == "blood_bank"
                    ? "text-[#b43232] border-b-2 border-b-red-700"
                    : ""
                }`}
                onClick={loginUserHandler}
              >
                As BloodBank
              </div>
              <div
                id="hospital"
                className={`cursor-pointer ${
                  loginUser == "hospital"
                    ? "text-[#b43232] border-b-2 border-b-red-700"
                    : ""
                }`}
                onClick={loginUserHandler}
              >
                As Hospital
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <input
                onChange={changeHandler}
                className="w-[150%] p-2 rounded-md  border-[#ac282877] border-[1px] text-xs merri"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                onChange={changeHandler}
                className="w-[150%] p-2 rounded-md border-[#ac282877] border-[1px] text-xs merri"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div
              onClick={formSubmitHandler}
              className="text-white w-32 text-xs bg-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer"
            >
              Sign In
            </div>
          </div>
          <div className="w-[45%] bg-[#ac2828e3] rounded-r-md flex flex-col justify-center items-center gap-6 shadow-md shadow-red-800">
            <div className="text-4xl font-semibold merri text-white">
              New Here?
            </div>
            <div className="w-[70%] text-center text-white merri ">
              Signup and contribute for humanity
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white w-40 text-xs text-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer">
                Register as Donor
              </div>
              <div className="bg-white w-40 text-xs text-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer">
                BloodBank Registration
              </div>
              <div className="bg-white w-40 text-xs text-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer">
                Hospital Registration
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
