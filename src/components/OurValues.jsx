import React from "react";

import Endurance from "../assets/images/endurance.png";
import Integrity from "../assets/images/integration.png";
import Empathy from "../assets/images/network.png";

const ourValues = [
  {
    img: Endurance,
    title: "ENDURANCE",
    desc: "Financial investments require stability and Dhanvriddhi has offered it to its clients since the last 20 years",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    img: Integrity,
    title: "INTEGRITY",
    desc: "Our Services are personalized which gives our customers a privileged experience.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    img: Empathy,
    title: "EMPATHY",
    desc: "Delivering consistent results to more than 6000 clients since past 20 years talk about the experience we have in products we offer.",
    gradient: "from-orange-400 to-yellow-500",
  },
];

const OurValues = () => {
  return (
    <>
      <div className="text-center mt-20 mb-14">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold relative inline-block">
          <span className="bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text animate-gradient">
            Our Values
          </span>
          {/* Glowing Shadow */}
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#0057FF] to-[#FF6A00] opacity-30 rounded-full"></span>
        </h1>

        {/* Animated Gradient Underline */}
        <div className="mt-4 h-1 w-32 bg-gradient-to-r from-[#0057FF] to-[#FF6A00] mx-auto rounded-full animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
        {ourValues.map((value, index) => (
          <div key={index} className="group w-full h-80 perspective">
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div
                className={`absolute w-full h-full flex flex-col items-center justify-center rounded-2xl shadow-xl bg-gradient-to-br ${value.gradient} backface-hidden overflow-hidden`}
              >
                <img
                  src={value.img}
                  alt={value.title}
                  className="w-20 h-20 mb-4 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <h3 className="uppercase text-white text-2xl font-bold tracking-wide">
                  {value.title}
                </h3>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full flex flex-col items-center justify-center text-center text-white bg-gray-900/90 p-6 rounded-2xl shadow-xl backface-hidden rotate-y-180">
                <p className="text-base leading-relaxed">{value.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurValues;
