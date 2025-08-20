import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logoFiles = import.meta.glob("../assets/images/logo/*.png", { eager: true, as: "url" });
const logos = Object.values(logoFiles);

const Clients = () => {
  const settings = {
  infinite: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768, // screen width ≤ 768px
      settings: {
        slidesToShow: 2, // show 1 logo on mobile
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <>
    {/* Heading */}
      <div className="text-center mb-10 mt-10 lg:mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold relative inline-block">
          <span className="bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text">
            Our Clients
          </span>
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#0057FF] to-[#FF6A00] opacity-30 rounded-full -z-10"></span>
        </h1>
        <div className="mt-3 h-1 w-24 md:w-32 bg-gradient-to-r from-[#0057FF] to-[#FF6A00] mx-auto rounded-full animate-pulse"></div>
      </div>
    <div style={{ padding: "20px 0", display: "flex", justifyContent: "center" }}>
        
      {/* White background slider wrapper */}
      <div style={{  padding: "20px 0", width: "100%", borderRadius: "10px" }}>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                  background: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Clients;
