import Image from "next/image";
import React from "react";
import hero from "@/assests/Hero-Gradient Design.png";
import BlackButton from "../UIElements/BlackButton";
import Router from "next/router";

function Hero() {
  const openDonatePage = () => {
    Router.push({ pathname: `/searchCamps` });
  };

  return (
    <div className="w-full bg-white flex">
      <Image
        src={hero}
        alt="Hero Image"
        width="800"
        height="800"
        className="max-h-[45rem] flex-[1.3]"
      />
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-md pt-20">
          <h2 className="text-4xl merri">Save Life Donate Blood</h2>
          <p className="text-base my-8 text-justify mont">
            In a world pulsating with the rhythm of compassion, our collective
            heartbeat resonates with a simple yet profound call to action:
            &apos;Save Life, Donate Blood.&apos; Step into the realm of
            altruism, where each drop given becomes a lifeline, weaving a
            tapestry of hope and resilience. Join us as we embark on a journey
            to make a difference, one donation at a time.
          </p>
          <BlackButton text="Donate Blood" onClick={openDonatePage} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
