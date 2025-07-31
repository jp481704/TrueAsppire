import React from "react";

const OurService = () => {
  const overService = [
    {
      title: "INVESTING",
      description:
        "Investment helps us to keep funds ready for planned life needs.",
      image:
        "https://img.freepik.com/premium-vector/man-with-graph-up-dollar-business-illustration_1134986-18343.jpg?w=826",
      items: ["FD/BONDS", "Mutual Fund", "Broking", "Government Schemes"],
    },
    {
      title: "INSURING",
      description:
        "Insurance Solutions enable individuals to protect what they value.",
      image:
        "https://img.freepik.com/premium-vector/man-holding-umbrella_1134986-5363.jpg?w=740&q=80",
      items: [
        "Life Insurance",
        "General Insurance",
        "Health Insurance",
        "Cancer Cover",
      ],
    },
    {
      title: "OTHER SERVICES",
      description:
        "Other finance management services from Dhanvriddhi Finvest.",
      image:
        "https://img.freepik.com/premium-vector/business-team-working-together-project-achieving-goals-using-technology_657438-41710.jpg?w=826",
      items: ["Forex", "Loans", "ITR", "NRI Desk", "Estate Planning"],
    },
    {
      title: "DON’T MISS",
      description:
        "Your Financial planning may not be complete without these plans",
      image:
        "https://img.freepik.com/premium-vector/business-team-working-together-project-achieving-goals-using-technology_657438-41710.jpg?w=826",
      items: [
        "Medi-SIP",
        "Guaranteed Millionaire",
        "Life Time Pension",
        "Unique Child Gift",
        "Mutual Funds for Life Journey",
      ],
    },
  ];

  return (
    <section className="md:py-10 bg-gradient-to-br ">
      {/* Heading */}
      <div className="text-center mt-20 mb-14">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold relative inline-block">
          <span className="bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text animate-gradient">
            Our Service
          </span>
          {/* Glowing Shadow */}
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#0057FF] to-[#FF6A00] opacity-30 rounded-full"></span>
        </h1>

        {/* Animated Gradient Underline */}
        <div className="mt-4 h-1 w-32 bg-gradient-to-r from-[#0057FF] to-[#FF6A00] mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 ">
        {overService.map((service, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Service Image */}
            <div className="w-28 h-28 mb-4 overflow-hidden rounded-full shadow-md border border-gray-200">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>

            {/* Items */}
            <ul className="text-gray-700 text-sm space-y-2 w-full text-left list-none">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200"
                >
                  ✅ {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            {/* <button className="mt-6 px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow hover:shadow-lg transition-all">
              Learn More
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
