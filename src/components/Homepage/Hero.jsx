import Image from "next/image";
import React from "react";
import hero from "@/assests/Hero-Gradient Design.png";
import BlackButton from "../UIElements/BlackButton";

function Hero() {
  const openDonatePage = () => {};

  return (
    <div className="w-full bg-white flex">
      <Image
        src={hero}
        alt="Hero Image"
        width="200"
        height="300"
        className="max-h-[40rem] flex-1"
      />
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-lg">
          <h2 className="text-4xl">Save Life Donate Blood</h2>
          <p className="text-sm my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <BlackButton text="Donate Blood" onClick={openDonatePage} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
