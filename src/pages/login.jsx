import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BlackButton from "@/components/UIElements/BlackButton";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import Link from "next/link";
import React from "react";
import loginImg from "@/assests/login_image.png";

const login = () => {
  return (
    <ResponsiveLayout>
      <Header />
      <div className="flex h-[70vh] mx-[10%] mt-10 mb-20">
        <div className="w-[50%]">
          <img className="w-[100%] h-[100%]" src={loginImg.src}></img>
        </div>
        <div className="w-[50%] bg-gray-200 rounded-2xl p-4 mx-[10%]">
          <div className="w-[70%] h-[90%] m-auto my-[5%] flex flex-col gap-4 items-center justify-center rounded-2xl">
            <div className="font-semibold text-2xl">LOGIN</div>
            <input
              className="w-[80%] p-1 rounded-md"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-[80%] p-1 rounded-md"
              type="password"
              placeholder="Password"
            />
            <button className="mx-auto justify-center bg-white flex text-black px-8 py-1 rounded-md font-semibold shadow-md shadow-gray-600 active:shadow-none active:translate-y-1">
              Donate
            </button>
            <Link className="underline font-thin" href="/register/donor">
              Register as Donor
            </Link>
            <Link className="underline font-thin" href="/register/blood-bank">
              Register as Blood Bank
            </Link>
            <Link className="underline font-thin" href="register/hospital">
              Register as Hospital
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </ResponsiveLayout>
  );
};

export default login;
