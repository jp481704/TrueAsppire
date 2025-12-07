import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import mutualImg from "../assets/images/Mutual-Fund.png"; // hero image
import fdbondImg from "../assets/images/fix-deposite.png"; // FDs & Bonds image (optional)

const MutualFunds = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  /* -------------------- MUTUAL FUND BENEFITS -------------------- */
  const mfBenefits = [
    {
      title: "Professional Management",
      desc: "Your money is handled by experienced fund managers who research, analyze, and monitor investments.",
      icon: (
        <svg className="w-10 h-10 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 6v6l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      ),
    },
    {
      title: "Diversification",
      desc: "Get exposure across companies, sectors, and asset classes — even with a small investment.",
      icon: (
        <svg className="w-10 h-10 text-[#FF6A00]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
        </svg>
      ),
    },
    {
      title: "Flexible Investment Options",
      desc: "Invest via SIP for discipline or Lumpsum for one-time allocation — as per your convenience.",
      icon: (
        <svg className="w-10 h-10 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M4 19h16M4 15h10M4 11h6M4 7h2" />
        </svg>
      ),
    },
    {
      title: "High Liquidity",
      desc: "Easily buy and sell most mutual funds anytime during market hours (subject to scheme rules).",
      icon: (
        <svg className="w-10 h-10 text-[#FF6A00]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      title: "Transparency & Regulation",
      desc: "All mutual funds in India are regulated by SEBI, ensuring transparency and investor protection.",
      icon: (
        <svg className="w-10 h-10 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M4 5h16v14H4zM8 9h8M8 13h5" />
        </svg>
      ),
    },
    {
      title: "Tax Benefits (ELSS)",
      desc: "Invest in ELSS funds and claim deductions under Section 80C, with potential for long-term growth.",
      icon: (
        <svg className="w-10 h-10 text-[#FF6A00]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 2l7 7-7 7-7-7z" />
        </svg>
      ),
    },
  ];

  /* -------------------- MUTUAL FUND TYPES -------------------- */
  const mfTypesObjective = [
    {
      title: "Equity Mutual Funds",
      desc: "Invest primarily in shares of companies. Ideal for long-term wealth creation.",
    },
    {
      title: "Debt Mutual Funds",
      desc: "Invest in bonds, govt securities & fixed-income instruments. Suitable for stable returns.",
    },
    {
      title: "Hybrid Mutual Funds",
      desc: "Mix of equity & debt to balance growth and stability for moderate risk investors.",
    },
    {
      title: "ELSS (Tax-Saving Funds)",
      desc: "Equity Linked Savings Scheme with 3-year lock-in and 80C tax benefits.",
    },
  ];

  const mfTypesStructure = [
    {
      title: "Open-Ended Funds",
      desc: "Can be bought or sold anytime at the prevailing NAV.",
    },
    {
      title: "Close-Ended Funds",
      desc: "Have a fixed tenure; units are generally listed and tradable on exchanges.",
    },
  ];

  /* -------------------- SIP VS LUMPSUM -------------------- */
  const sipVsLumpsum = [
    {
      feature: "Investment Style",
      sip: "Invest a fixed amount monthly",
      lumpsum: "Invest a large amount at once",
    },
    {
      feature: "Best For",
      sip: "Regular savers, salaried investors",
      lumpsum: "Investors with idle funds",
    },
    {
      feature: "Market Timing Risk",
      sip: "Lower – spread over time",
      lumpsum: "Higher – depends on entry point",
    },
    {
      feature: "Wealth Building",
      sip: "Gradual and disciplined",
      lumpsum: "Potentially faster if timed well",
    },
    {
      feature: "Flexibility",
      sip: "Can start/stop anytime",
      lumpsum: "One-time investment",
    },
  ];

  /* -------------------- TRUEASPPIRE HELPS -------------------- */
  const trueAspireHelps = [
    {
      title: "🎯 Goal-Based Fund Selection",
      desc: "We align your investments with life goals like retirement, education, or wealth creation.",
    },
    {
      title: "📊 Risk Profiling",
      desc: "We understand your risk appetite before recommending funds.",
    },
    {
      title: "🧠 Expert Research & Analysis",
      desc: "Backed by Angel One’s in-depth market research and fund insights.",
    },
    {
      title: "💻 Easy Online Access",
      desc: "Invest, track, and manage your mutual funds in one place.",
    },
    {
      title: "🤝 Dedicated Support",
      desc: "Personalized advisory and after-sales support for every client.",
    },
  ];

  /* -------------------- FDs & BONDS BENEFITS -------------------- */
  const fdBondBenefits = [
    {
      title: "Guaranteed Returns",
      desc: "Earn a fixed rate of interest regardless of market ups and downs.",
    },
    {
      title: "Low Risk, High Safety",
      desc: "Ideal for conservative investors who prefer stability over volatility.",
    },
    {
      title: "Flexible Tenure",
      desc: "Choose tenures from a few months to 10+ years as per your goals.",
    },
    {
      title: "Regular Income",
      desc: "Get interest payouts monthly, quarterly, or annually.",
    },
    {
      title: "Portfolio Diversification",
      desc: "Add FDs & bonds to balance risk against market-linked investments.",
    },
    {
      title: "Tax Benefits",
      desc: "Tax-saving FDs & certain bonds offer 80C or tax-free interest advantages.",
    },
  ];

  const fdTypes = [
    "Bank Fixed Deposit – Traditional bank FD with assured returns.",
    "Corporate Fixed Deposit – Offered by NBFCs/corporates, usually higher interest.",
    "Tax-Saving Fixed Deposit – 5-year lock-in + 80C benefit.",
    "Cumulative FD – Interest compounded & paid at maturity.",
    "Non-Cumulative FD – Interest paid periodically.",
  ];

  const bondTypes = [
    "Government Bonds – Issued by Govt of India; very safe.",
    "Corporate Bonds – Issued by companies to raise funds.",
    "Tax-Free Bonds – Interest is tax-free; ideal for high-income earners.",
    "RBI Floating Rate Bonds – Interest linked with market rates.",
    "Sovereign Gold Bonds – Alternative to physical gold with added interest.",
  ];

  const whyTrueAspireFD = [
    "Wide Range of Trusted Options – Access FDs & Bonds from top-rated banks, corporates & govt bodies.",
    "Convenient & Paperless – Digital investing through Angel One with secure documentation.",
    "Customized Portfolio Advice – FDs & Bonds matched to your goals and risk profile.",
    "Personalized Support – Step-by-step guidance till maturity.",
    "Transparency & Trust – SEBI-regulated, verified products via Angel One platform.",
  ];

  const fdSteps = [
    "Connect with Our Advisor – Discuss your financial goals and expectations.",
    "Choose Your Product – Select suitable FDs or Bonds from curated options.",
    "Complete KYC & Documentation – Simple online process via Angel One.",
    "Invest & Relax – Track your investments anytime, anywhere.",
  ];

  return (
    <div className="pb-20 pt-10">
      {/* ================== HERO SECTION - MUTUAL FUNDS ================== */}
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0057FF]">
            Mutual Funds, <span className="text-[#FF6A00]">FDs & Bonds</span>
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            A Mutual Fund is a professionally managed investment that pools money from multiple 
            investors to buy stocks, bonds, and other securities. It’s one of the most convenient 
            ways to grow your wealth — whether you're a beginner or an experienced investor.
            <br /><br />
            At <strong>TrueAsppire Finserve Pvt. Ltd.</strong>, powered by 
            <strong> Angel One Ltd.</strong>, we help you invest smartly in top-performing 
            mutual funds, fixed deposits, and bonds — all from a single platform.
          </p>

          <button className="mt-6 px-8 py-3 bg-[#FF6A00] hover:bg-orange-600 text-white font-semibold rounded-full transition">
            Start Investing
          </button>
        </div>

        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={mutualImg}
            alt="Mutual Funds"
            className="w-[90%] drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* ================== BENEFITS OF MUTUAL FUNDS ================== */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold bg-gradient-to-r from-[#0057FF] to-[#FF6A00] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Benefits of Investing in Mutual Funds
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {mfBenefits.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== TYPES OF MUTUAL FUNDS ================== */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold text-[#0057FF]"
          data-aos="fade-up"
        >
          Types of Mutual Funds
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {/* By Objective */}
          <div data-aos="fade-right">
            <h3 className="text-xl font-semibold text-[#FF6A00] mb-4">
              Based on Investment Objective
            </h3>
            <div className="space-y-4">
              {mfTypesObjective.map((type, i) => (
                <div
                  key={i}
                  className="p-4 bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all flex gap-3"
                >
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{type.title}</h4>
                    <p className="text-gray-700 text-sm mt-1">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By Structure */}
          <div data-aos="fade-left">
            <h3 className="text-xl font-semibold text-[#FF6A00] mb-4">
              Based on Structure
            </h3>
            <div className="space-y-4">
              {mfTypesStructure.map((type, i) => (
                <div
                  key={i}
                  className="p-4 bg-white border rounded-2xl shadow-md hover:shadow-lg transition-all flex gap-3"
                >
                  <div className="mt-1">
                    <svg className="w-6 h-6 text-[#FF6A00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2l7 7-7 7-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{type.title}</h4>
                    <p className="text-gray-700 text-sm mt-1">{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== SIP VS LUMPSUM ================== */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#0057FF] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          SIP vs Lumpsum – Which is Right for You?
        </h2>

        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[700px] bg-white border rounded-2xl shadow-lg" data-aos="fade-up">
            <div className="grid grid-cols-3 bg-gray-50 rounded-t-2xl">
              <div className="p-4 font-semibold text-gray-800">Feature</div>
              <div className="p-4 font-semibold text-[#0057FF] text-center">SIP</div>
              <div className="p-4 font-semibold text-[#FF6A00] text-center">Lumpsum</div>
            </div>
            {sipVsLumpsum.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <div className="p-4 text-gray-800 font-medium">{row.feature}</div>
                <div className="p-4 text-gray-700 text-center">{row.sip}</div>
                <div className="p-4 text-gray-700 text-center">{row.lumpsum}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-gray-700 max-w-3xl mx-auto" data-aos="fade-up">
          If you prefer discipline and consistency, <strong>SIP</strong> is usually the best choice.  
          If you have a large sum ready for long-term investment, <strong>Lumpsum</strong> can work well.  
          <br />
          At <strong>TrueAsppire</strong>, we help you choose the right approach based on your goals.
        </p>
      </section>

      {/* ================== HOW TRUEASPIRE HELPS ================== */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold text-[#0057FF]"
          data-aos="fade-up"
        >
          How TrueAsppire Helps You Choose the Right Fund
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {trueAspireHelps.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 bg-white rounded-2xl border shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-700 max-w-3xl mx-auto" data-aos="fade-up">
          Invest confidently with <strong>TrueAsppire Finserve Pvt. Ltd.</strong> — 
          your trusted financial growth partner.
        </p>
      </section>

      {/* ================== FDs & BONDS - INTRO ================== */}
      <section className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#FF6A00]">
            Fixed Deposits & <span className="text-[#0057FF]">Bonds</span>
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Fixed Deposits (FDs) and Bonds are among the safest investment options 
            for individuals seeking stable, predictable returns. They are ideal for 
            investors who prefer capital protection over high risk.
            <br /><br />
            At <strong>TrueAsppire Finserve Pvt. Ltd.</strong>, through our partnership 
            with <strong>Angel One Ltd.</strong>, you get access to a wide range of 
            bank FDs, corporate FDs, and high-quality bonds from trusted issuers.
          </p>
        </div>

        <div data-aos="fade-left" className="flex justify-center">
          <img
            src={fdbondImg}
            alt="FDs and Bonds"
            className="w-[90%] drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* ================== BENEFITS OF FDs & BONDS ================== */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold bg-gradient-to-r from-[#FF6A00] to-[#0057FF] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Benefits of Investing in FDs & Bonds
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {fdBondBenefits.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 bg-white rounded-2xl border shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-8 h-8 text-[#0057FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== TYPES OF FDs & BONDS ================== */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold text-[#0057FF]"
          data-aos="fade-up"
        >
          Types of FDs & Bonds
        </h2>

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          {/* FDs */}
          <div data-aos="fade-right">
            <h3 className="text-xl font-semibold text-[#FF6A00] mb-4">
              Types of Fixed Deposits
            </h3>
            <div className="space-y-3">
              {fdTypes.map((t, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
                  <svg className="w-6 h-6 text-[#0057FF] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 text-sm">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bonds */}
          <div data-aos="fade-left">
            <h3 className="text-xl font-semibold text-[#FF6A00] mb-4">
              Types of Bonds
            </h3>
            <div className="space-y-3">
              {bondTypes.map((t, i) => (
                <div key={i} className="flex gap-3 items-start bg-white border rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
                  <svg className="w-6 h-6 text-[#FF6A00] mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  <p className="text-gray-700 text-sm">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== WHY INVEST THROUGH TRUEASPPIRE ================== */}
      <section className="mt-20">
        <h2
          className="text-center text-3xl font-bold bg-gradient-to-r from-[#0057FF] to-[#FF6A00] bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Why Invest through TrueAsppire?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {whyTrueAspireFD.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="p-6 bg-white rounded-2xl border shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================== HOW TO GET STARTED ================== */}
      <section className="mt-20 mb-16">
        <h2
          className="text-center text-3xl font-bold text-[#0057FF]"
          data-aos="fade-up"
        >
          How to Get Started with FDs & Bonds
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {fdSteps.map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="bg-white rounded-2xl border shadow-lg hover:shadow-2xl p-6 text-center transition-all"
            >
              <div className="text-2xl font-bold text-[#FF6A00] mb-2">
                {i + 1}
              </div>
              <p className="text-gray-700 text-sm">{step}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-10 py-3 bg-[#FF6A00] hover:bg-orange-600 text-white rounded-full text-lg">
            Talk to Our Advisor
          </button>
        </div>
      </section>
    </div>
  );
};

export default MutualFunds;
