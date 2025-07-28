import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/images/banner_1.png";
import banner2 from "../assets/images/banner_2.png";

// Slide data
const slides = [
  {
    heading: `MAKING YOU\nPROSPER.`,
    subheading: "Smart Investment. Early Returns.",
    content:
      "At Dhanvriddhi, we believe that wealth isn't just built — it's nurtured. We guide young individuals to make informed financial decisions early in life, helping them harness the power of compounding. Whether you're just starting your career or planning for the future, our goal is to help you build a strong financial foundation. Remember: the earlier you start, the more time your money has to grow.",
    image: banner1,
  },
  {
    heading: "KEEPING YOU FINANCIALLY HEALTHY.",
    subheading: "Finance Made Simple for All Ages.",
    content:
      "Financial freedom is not a luxury — it's a necessity. From managing expenses to planning for emergencies, retirement, or life’s surprises, being financially prepared keeps you confident and secure. At Dhanvriddhi, we provide tools, education, and support to make financial wellness a lifelong habit. No matter your age or income, we help you stay financially fit at every stage of life.",
    image: banner2,
  },
];

const HeroBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="!flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-0 lg:px-0 py-10 lg:pt-26 max-w-screen-xl mx-auto"
          >
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 whitespace-pre-line leading-tight">
                {slide.heading}
              </h2>
              <h4 className="text-md sm:text-lg lg:text-2xl text-blue-500 font-semibold mb-4">
                {slide.subheading}
              </h4>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                {slide.content}
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition duration-300">
                Learn More
              </button>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[45%] mb-8 lg:mb-0">
              <img
                src={slide.image}
                alt={`Banner ${index + 1}`}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        ))}
      </Slider>

      <style>
        {`
          .slick-dots {
            bottom: 16px;
          }
          .slick-dots li button:before {
            color: #3b82f6;
            font-size: 12px;
          }
          .slick-dots li.slick-active button:before {
            color: #1e3a8a;
          }
        `}
      </style>
    </div>
  );
};

export default HeroBanner;
