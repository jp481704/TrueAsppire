import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dematImg from "../assets/images/Demat.png";

const Demat = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  /* -------------------- WHY CHOOSE US DATA -------------------- */
  const whyChooseUs = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
        </svg>
      ),
      text: "Trusted Angel One Franchise Partner – Seamless trading experience with advanced tools.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#FF6A00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Quick & Easy Paperless Account Opening – Complete KYC in 10 minutes.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M12 1v22M4 6h16M4 12h16M4 18h16" />
        </svg>
      ),
      text: "Zero AMC (First Year) – Start your investment journey with low cost.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#FF6A00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h18v4H3zM6 7v10a6 6 0 0012 0V7" />
        </svg>
      ),
      text: "Real-Time Market Access – Invest in Stocks, IPOs, Bonds & More.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: "Dedicated Relationship Manager for personalized advisory.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-[#FF6A00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M12 1l8 4v6c0 5.5-3.8 10.4-8 12-4.2-1.6-8-6.5-8-12V5l8-4z" />
        </svg>
      ),
      text: "Safe & Secure Transactions with SEBI-registered partner.",
    },
  ];

  /* -------------------- OPEN ACCOUNT STEPS -------------------- */
  const steps = [
    {
      num: "01",
      text: "Click “Open Account” on our website.",
      icon: (
        <svg
          className="w-12 h-12 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      num: "02",
      text: "Enter your Name, PAN, Aadhaar, and Bank details.",
      icon: (
        <svg
          className="w-12 h-12 text-[#FF6A00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0 2c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
        </svg>
      ),
    },
    {
      num: "03",
      text: "Complete e-KYC using Aadhaar OTP.",
      icon: (
        <svg
          className="w-12 h-12 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M16 12V8a4 4 0 00-8 0v4M5 12h14l-1 9H6l-1-9z" />
        </svg>
      ),
    },
    {
      num: "04",
      text: "Upload PAN, Aadhaar, Bank Proof & Photo.",
      icon: (
        <svg
          className="w-12 h-12 text-[#FF6A00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M4 4h16v16H4zM8 8h8" />
        </svg>
      ),
    },
    {
      num: "05",
      text: "Verification completes within 30 minutes.",
      icon: (
        <svg
          className="w-12 h-12 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: "06",
      text: "Start trading instantly once approved!",
      icon: (
        <svg
          className="w-12 h-12 text-[#FF6A00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  /* -------------------- ADVANTAGES -------------------- */
  const advantages = [
    "Paperless & secure way to hold shares",
    "Easy transfer of securities",
    "Quick settlement of trades",
    "Access to IPOs and mutual funds",
    "Real-time portfolio tracking",
    "No risk of loss, theft, or damage",
    "Hold multiple asset classes in one account",
  ];

  /* -------------------- TYPES OF DEMAT ACCOUNTS -------------------- */
  const dematTypes = [
    {
      title: "Regular Demat Account",
      desc: "For Indian residents investing in stocks & securities.",
      icon: (
        <svg
          className="w-12 h-12 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M3 5h18M3 12h18M3 19h18" />
        </svg>
      ),
    },
    {
      title: "Repatriable Demat Account",
      desc: "For NRIs who want to repatriate funds abroad.",
      icon: (
        <svg
          className="w-12 h-12 text-[#FF6A00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v18M4 12h16" />
        </svg>
      ),
    },
    {
      title: "Non-Repatriable Account",
      desc: "For NRIs investing without fund repatriation.",
      icon: (
        <svg
          className="w-12 h-12 text-[#0057FF]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="md:pb-20 md:pt-10">
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0057FF]">
            Demat & Trading <span className="text-[#FF6A00]">Account</span>
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            A Demat Account lets you hold shares and securities in electronic
            form — just like a bank account holds your money. It eliminates
            paperwork and makes investing smooth, fast, and secure.
            <br />
            <br />
            At <strong>TrueAspire Finserve Pvt. Ltd.</strong>, powered by
            <strong> Angel One Ltd.</strong>, we provide a seamless digital
            investing experience with security and convenience at every step.
          </p>

          <button className="mt-6 px-8 py-3 bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold rounded-full transition">
            Open Demat Account
          </button>
        </div>

        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={dematImg}
            alt="Demat Account"
            className="w-[90%] drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* ------------------- WHY CHOOSE US ------------------- */}
      <section className="mt-20">
        <h2 className="text-4xl md:text-[28px] font-extrabold relative text-center flex justify-center">
          <span className="bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text">
            Why Open Demat Account with TrueAspire?
          </span>
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#0057FF] to-[#FF6A00] opacity-30 rounded-full -z-10"></span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start"
            >
              <div>{item.icon}</div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------- STEPS SECTION ------------------- */}
      <section className="mt-20">
       
        <h2 className="text-4xl md:text-[28px] font-extrabold relative  text-center flex justify-center">
          <span className="bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text">
            How to Open a Demat Account?
          </span>
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#0057FF] to-[#FF6A00] opacity-30 rounded-full -z-10"></span>
        </h2>

        <p className="text-center text-gray-600 mt-2 font-semibold">
          Opening your account is 100% online & hassle-free!
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white shadow-lg rounded-2xl border hover:shadow-2xl p-6 text-center transition-all duration-300"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="mt-4 text-[#FF6A00] font-bold text-2xl">
                {step.num}
              </h3>
              <p className="mt-2 text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-10 py-3 bg-[#FF6A00] hover:bg-orange-600 text-white rounded-full text-lg">
            Start Now
          </button>
        </div>
      </section>

      {/* ------------------- ADVANTAGES ------------------- */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold bg-gradient-to-r text-[#FF6A00] bg-clip-text "
          data-aos="fade-up"
        >
          Advantages of a Demat Account
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {advantages.map((adv, i) => (
            <div
              key={i}
              data-aos="fade-right"
              className="flex gap-3 items-start p-5 bg-white border rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <svg
                className="w-8 h-8 text-[#0057FF]"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">{adv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------- TYPES OF DEMAT ACCOUNTS ------------------- */}
      <section className="mt-20 mb-20">
        <h2
          className="text-center text-3xl font-bold text-[#0057FF]"
          data-aos="fade-up"
        >
          Types of Demat Accounts
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {dematTypes.map((type, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 bg-white border shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center">{type.icon}</div>
              <h3 className="font-bold text-[#FF6A00] text-xl mt-4 text-center">
                {type.title}
              </h3>
              <p className="text-gray-700 mt-2 text-center">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Demat;
