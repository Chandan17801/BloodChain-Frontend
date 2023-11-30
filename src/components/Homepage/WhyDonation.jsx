import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import SliderBox from "./SliderBox";
import reasonsToDonate from "@/data/reasonToDonate";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1424 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1424, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 740 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
  },
};

const SliderCon = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl theme-gradient py-8 mx-auto p-1">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">
          Why Donation?
        </h2>
        <Carousel responsive={responsive} infinite={true}>
          {reasonsToDonate.map((reason, index) => (
            <div
              key={index}
              className="mb-6 p-6 rounded-lg border border-solid mx-2 h-[14rem] bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderCon;
