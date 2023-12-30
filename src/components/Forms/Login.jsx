import React from "react";
import { useState } from "react";
import BlackButton from "@/components/UIElements/BlackButton";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import Link from "next/link";
import loginImg from "@/assests/login_image_creative.jpg";
import Image from "next/image";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout, login } from "@/store/auth";
import Router from "next/router";
import OtpBox from "./otp";

export default function Login() {
  const { userType, userId, token, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [loginUser, setLoginUser] = useState("users");
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
  };

  const handleLogin = (payload) => {
    dispatch(login(payload));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let response = null;
    try {
      if (loginUser == "users") {
        response = await axios.post(
          process.env.NEXT_PUBLIC_SERVER_URL + "/users/login",
          formData
        );
        if (response.data.success) {
          handleLogin({
            userType: loginUser,
            userId: response.data.userId,
            token: response.data.token,
            email: response.data.email,
          });
          Router.replace({ pathname: `/${loginUser}/dashboard` });
        }
      } else if (loginUser == "bloodbank") {
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
      // console.log(response);
      setIsOtpVisible(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ResponsiveLayout>
      {isOtpVisible && <OtpBox email={formData.email} userType={loginUser} />}
      <div
        className="flex justify-center items-center h-[100vh]"
        style={{
          backgroundImage: `url(${loginImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="flex w-[45rem] h-[25rem]">
          <div className="w-[55%] bg-[#ffc3c360] rounded-l-md flex flex-col gap-4 justify-center items-center shadow-md shadow-red-100">
            <div className="w-32">
              <Image
                className="w-full"
                src={require("../../assests/logo1.png")}
                height={300}
                width={300}
                alt="logo"
              ></Image>
            </div>
            <div className="text-3xl merri font-semibold text-center text-[#ac2828]">
              Login to Your Account
            </div>
            <div className="w-[70%] flex justify-around text-[#cc191996] text-xs">
              <div
                className={`cursor-pointer ${
                  loginUser == "users"
                    ? "text-[#b43232] border-b-2 border-b-red-700"
                    : ""
                }`}
                id="users"
                onClick={loginUserHandler}
              >
                As Donor
              </div>
              <div
                id="bloodbank"
                className={`cursor-pointer ${
                  loginUser == "bloodbank"
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
                className="w-[150%] p-[6px] rounded-md  border-[#ac282877] border-[1px] text-xs merri"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                onChange={changeHandler}
                className="w-[150%] p-[6px] rounded-md border-[#ac282877] border-[1px] text-xs merri"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div
              onClick={formSubmitHandler}
              className="text-white w-32 text-xs bg-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer shadow-md shadow-red-800  hover:shadow-red-950 active:shadow-none active:translate-y-1"
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
              <div
                onClick={() => Router.push({ pathname: "/register/donor" })}
                className="bg-white w-40 text-xs text-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer hover:bg-red-100"
              >
                Register as Donor
              </div>
              <div
                onClick={() =>
                  Router.push({ pathname: "/register/blood-bank" })
                }
                className="bg-white w-40 text-xs text-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer hover:bg-red-100"
              >
                BloodBank Registration
              </div>
              <div
                onClick={() => Router.push({ pathname: "/register/hospital" })}
                className="bg-white w-40 text-xs text-[#ac2828] merri text-center py-2 rounded-3xl cursor-pointer hover:bg-red-100"
              >
                Hospital Registration
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
