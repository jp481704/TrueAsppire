import React from "react";
import { motion } from "framer-motion";
import aboutGraph from "../assets/images/stock-market-economic-graph.jpg";
import ourJourney from "../assets/images/our_journy.png";
import ourApproach from "../assets/images/our_approch.png";

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* === HERO SECTION === */}
      <div className="relative w-full aspect-[9/3] md:aspect-[16/5]">
        <img
          className="w-full h-full object-cover"
          src={aboutGraph}
          alt="About Graph"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold underline">
            About Us
          </h1>
        </div>
      </div>

      {/* === OUR JOURNEY === */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 mt-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src={ourJourney}
            alt="Our Journey"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text mb-4">
            Our Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#0057FF] to-[#FF6A00] rounded-full mb-6"></div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            The journey of <b>TRUEASPPIRE</b> started in 1999 with the aim of
            helping people manage their finances so they never face a shortage
            of funds when it matters most. Being from the financial capital of
            India, Mr. Vivek developed a passion for finance at an early age.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Over the past two decades, <b>TRUEASPPIRE Finvest</b> has witnessed
            several financial eras — from the Y2K problem to the global
            recession of 2008/09. Each challenge has strengthened our
            understanding and shaped our approach to wealth management.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Today, we are proud to see our clients achieving their goals — proof
            that dedication and long-term planning truly pay off.
          </p>
        </motion.div>
      </section>

      {/* === OUR APPROACH === */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20 mt-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text mb-4">
            Our Approach
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#0057FF] to-[#FF6A00] rounded-full mb-6"></div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            At <b>TRUEASPPIRE</b>, we believe financial literacy is essential
            for everyone. We encourage people to start investing early — no
            matter how small the amount — because building a saving habit is the
            first step to financial freedom.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Our mantra is simple: <b>“Start Small.”</b> Don’t wait for miracles
            — consistent investing builds the corpus you’ll need to meet life’s
            milestones confidently.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We strongly believe that <b>time</b> is your greatest friend in
            investing. The earlier you start, the easier it is to reach your
            dreams and enjoy financial peace in your golden years.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src={ourApproach}
            alt="Our Approach"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* === VISION & MISSION === */}
      <section className="flex flex-col md:flex-row text-white mt-20 mb-20">
        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#003CFF] to-[#0057FF] p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide relative z-10">
            Our Vision
          </h2>
          <p className="italic text-lg md:text-xl max-w-md leading-relaxed relative z-10">
            “To inspire every individual to take charge of their financial
            future — by learning, investing smartly, and growing with
            confidence.”
          </p>
          <p className="mt-6 text-sm text-blue-100 relative z-10">
            🌱 Because small steps today create a secure tomorrow.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#FF8A00] to-[#FF6A00] p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-10"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide relative z-10">
            Our Mission
          </h2>
          <p className="italic text-lg md:text-xl max-w-md leading-relaxed relative z-10">
            “To help people turn their goals into reality by giving them the
            tools and confidence to make smart financial choices.”
          </p>
          <p className="mt-6 text-sm text-orange-100 relative z-10">
            🚀 Together, we grow — one goal, one dream at a time.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
