import React from 'react';
import about_us from '../assets/images/about_us.png';

const AboutUs = () => {
  return (
    <div className="">
      {/* Header */}
      
      <div className="text-center mb-10 mt-10 lg:mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold relative inline-block">
          <span className="bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text">
            About Us
          </span>
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#0057FF] to-[#FF6A00] opacity-30 rounded-full -z-10"></span>
        </h1>
        <div className="mt-3 h-1 w-24 md:w-32 bg-gradient-to-r from-[#0057FF] to-[#FF6A00] mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse justify-between lg:flex-row items-center ">
        {/* Text Section */}
        <div className="lg:w-1/2 fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 mb-6">
            We deliver enduring results
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Financial advising is an accountable job and we understand it to its core.
            Our experience has made our job easier because market ups & downs have
            taught us how and what to do in such situations.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our values keep us focused and consistent. Our simple mantra is:
          </p>

          <div className="bg-gradient-to-r from-orange-100 to-orange-50 border-l-4 border-orange-500 p-4 rounded-md shadow-md">
            <span className="text-gray-800 font-semibold">
              Start small, start early, and be consistent with your investments.
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[35%]">
          <img
            src={about_us}
            alt="About Us"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
