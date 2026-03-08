import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Car,
  Home,
  Plane,
  BriefcaseBusiness,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  FileText,
  Handshake,
  Search,
  ClipboardList,
} from "lucide-react";

const GeneralInsurance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  const brandOrange = "#FF6A00";
  const brandBlue = "#0057FF";

  const insuranceTypes = [
    {
      name: "Motor Insurance",
      desc: "Protects your car or two-wheeler from damage, theft, accidents, and third-party liability.",
      icon: Car,
      color: "orange",
    },
    {
      name: "Home Insurance",
      desc: "Covers your home and belongings against fire, theft, natural calamities, or accidents.",
      icon: Home,
      color: "blue",
    },
    {
      name: "Travel Insurance",
      desc: "Provides financial protection during domestic or international travel including medical emergencies, lost baggage, or trip cancellation.",
      icon: Plane,
      color: "orange",
    },
    {
      name: "Business Insurance",
      desc: "Secures your business assets, machinery, and operations from unexpected financial risks.",
      icon: BriefcaseBusiness,
      color: "blue",
    },
  ];

  const benefits = [
    "Comprehensive protection for assets & valuables",
    "Peace of mind from unforeseen losses",
    "Quick claim processing",
    "Affordable premium options",
    "Tax benefits on certain policies",
  ];

  const whyChoose = [
    "Partnerships with top insurance companies for multiple product options",
    "Honest and transparent policy comparison",
    "End-to-end support — from choosing to claiming",
    "Personalized advice to fit your coverage needs",
    "Simple documentation and fast policy issuance",
  ];

  const quoteSteps = [
    {
      text: "Connect with Our Expert – Share your insurance needs",
      icon: Handshake,
      color: brandBlue,
    },
    {
      text: "Compare & Choose – Explore policy options from trusted insurers",
      icon: Search,
      color: brandOrange,
    },
    {
      text: "Get Instant Quote & Buy Online – Transparent pricing",
      icon: ClipboardList,
      color: brandBlue,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

        {/* What is General Insurance */}
        <section className=" bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div data-aos="fade-right">

              <span className="inline-block px-4 py-1.5 mb-5 text-sm font-bold tracking-widest text-orange-600 bg-orange-50 rounded-full">
                ASSET PROTECTION
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                What is <br />
                <span style={{ color: brandBlue }}>General Insurance?</span>
              </h1>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                General Insurance protects your valuable assets — such as your
                vehicle, home, business, and travel plans — from financial
                losses caused by accidents, theft, or natural disasters.
              </p>

              <p
                className="text-lg text-slate-700 italic border-l-4 p-4 rounded-r-lg mb-10"
                style={{
                  borderColor: brandOrange,
                  backgroundColor: `${brandOrange}08`,
                }}
              >
                At TrueAsppire Finserve Pvt. Ltd., we offer a wide range of
                general insurance solutions to keep your assets secure and give
                you peace of mind every day.
              </p>

              <button
                className="px-10 py-4 text-white rounded-2xl font-bold text-lg flex items-center gap-2"
                style={{ backgroundColor: brandOrange }}
              >
                Protect Your Assets <ArrowRight size={20} />
              </button>

            </div>

            <div data-aos="zoom-in">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
                alt="general insurance"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </section>

        {/* Types of General Insurance */}
        <section className="py-24 bg-slate-50">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              Types of <span style={{ color: brandOrange }}>General Insurance</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

              {insuranceTypes.map((item, index) => (
                <div
                  key={index}
                  className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100 text-center"
                >

                  <item.icon
                    className="w-10 h-10 mx-auto mb-6"
                    style={{
                      color:
                        item.color === "blue" ? brandBlue : brandOrange,
                    }}
                  />

                  <h3 className="text-2xl font-bold mb-4">{item.name}</h3>

                  <p className="text-slate-600">{item.desc}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-28 bg-white">

          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">

            <div>

              <h2 className="text-4xl font-extrabold mb-12">
                Benefits of{" "}
                <span style={{ color: brandBlue }}>General Insurance</span>
              </h2>

              <div className="space-y-6">

                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl"
                  >

                    <CheckCircle
                      className="w-7 h-7"
                      style={{ color: brandOrange }}
                    />

                    <p className="text-lg">{benefit}</p>

                  </div>
                ))}
              </div>

            </div>

            <div className="bg-white p-16 rounded-[3rem] shadow-xl text-center border">

              <h3 className="text-3xl font-bold mb-6">
                Secure Your Assets Today
              </h3>

              <p className="text-lg text-slate-600 mb-10">
                Protect your vehicle, home, business, and travel with reliable
                insurance solutions.
              </p>

              <button className="px-9 py-4 bg-[#FF6A00] text-white rounded-xl font-semibold">
                Request Free Quote
              </button>

            </div>

          </div>
        </section>

        {/* Why Choose TrueAsppire */}
        <section className="py-28 bg-slate-50">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              Why Choose{" "}
              <span style={{ color: brandOrange }}>TrueAsppire?</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-3xl shadow-sm flex gap-4"
                >

                  <ShieldCheck
                    className="w-7 h-7"
                    style={{ color: brandBlue }}
                  />

                  <p className="text-lg">{item}</p>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* How to Get Quote */}
        <section className="py-28 bg-white">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              How to <span style={{ color: brandBlue }}>Get a Quote</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              {quoteSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-10 bg-slate-50 rounded-3xl text-center"
                >

                  <step.icon
                    className="w-10 h-10 mx-auto mb-6"
                    style={{ color: step.color }}
                  />

                  <p className="text-lg font-semibold">{step.text}</p>

                </div>
              ))}
            </div>

            <p className="text-center mt-16 text-xl text-slate-600">
              💬 Protect your life, health, and assets with confidence — choose
              TrueAsppire Finserve Pvt. Ltd.
            </p>

          </div>
        </section>



    </div>
  );
};

export default GeneralInsurance;
