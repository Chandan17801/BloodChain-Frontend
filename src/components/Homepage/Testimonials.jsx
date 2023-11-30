import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from "@/data/testimonialData";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="theme-gradient pt-10 pb-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-normal mb-4 text-white text-center merri">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="p-6 mont">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">{testimonial.text}</p>
                <p className="font-semibold text-right">
                  - {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
