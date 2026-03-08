
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HeartPulse,
  ShieldCheck,
  Hospital,
  Ambulance,
  FileText,
  CheckCircle,
  ArrowRight,
  Users,
  Activity,
  Search,
  ClipboardList,
  Stethoscope,
} from "lucide-react";

const HealthInsurance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  const brandOrange = "#FF6A00";
  const brandBlue = "#0057FF";

  const benefits = [
    "Hospitalization & Surgery Expenses",
    "Pre & Post-Hospitalization Costs",
    "Day Care Procedures",
    "Ambulance Charges",
    "Critical Illness & Accident Cover",
    "Maternity & Newborn Coverage (optional)",
    "Annual Health Checkups",
  ];

  const chooseSteps = [
    {
      text: "Analyze your family’s health history & lifestyle",
      icon: Activity,
      color: brandBlue,
    },
    {
      text: "Check hospital network for cashless treatment",
      icon: Hospital,
      color: brandOrange,
    },
    {
      text: "Compare premiums & policy inclusions",
      icon: Search,
      color: brandBlue,
    },
    {
      text: "Look for no-claim bonus benefits",
      icon: ClipboardList,
      color: brandOrange,
    },
    {
      text: "Seek expert guidance from TrueAsppire Finserve",
      icon: Stethoscope,
      color: brandBlue,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      <main >

        {/* What is Health Insurance */}
        <section className=" bg-white">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div data-aos="fade-right">

              <span className="inline-block px-4 py-1.5 mb-5 text-sm font-bold tracking-widest text-orange-600 bg-orange-50 rounded-full">
                HEALTH PROTECTION
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                What is <br />
                <span style={{ color: brandBlue }}>Health Insurance?</span>
              </h1>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Health Insurance is a plan that covers your medical expenses in
                case of illness, accidents, or hospitalization. It ensures that
                your health emergencies don’t impact your financial stability.
              </p>

              <p
                className="text-lg text-slate-700 italic border-l-4 p-4 rounded-r-lg mb-10"
                style={{
                  borderColor: brandOrange,
                  backgroundColor: `${brandOrange}08`,
                }}
              >
                Through TrueAsppire Finserve Pvt. Ltd., you can compare and
                choose the best health insurance policies from leading insurers
                with features like cashless hospitalization, critical illness
                coverage, and family protection.
              </p>

              <button
                className="px-10 py-4 text-white rounded-2xl font-bold text-lg flex items-center gap-2"
                style={{ backgroundColor: brandOrange }}
              >
                Get Health Coverage <ArrowRight size={20} />
              </button>
            </div>

            <div data-aos="zoom-in">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                alt="health insurance"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Importance */}
        <section className="py-24 bg-slate-50">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              Importance of{" "}
              <span style={{ color: brandOrange }}>Health Insurance</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  title: "Expensive Treatment Cover",
                  desc: "Avoid high hospital bills during emergencies.",
                  icon: Hospital,
                  color: brandBlue,
                },
                {
                  title: "Family Protection 👩‍👧‍👦",
                  desc: "One plan that can cover all family members.",
                  icon: Users,
                  color: brandOrange,
                },
                {
                  title: "Cashless Hospitalization",
                  desc: "Get treatment at network hospitals without upfront payment.",
                  icon: ShieldCheck,
                  color: brandBlue,
                },
                {
                  title: "Tax Benefits",
                  desc: "Premiums eligible for deductions under Section 80D.",
                  icon: FileText,
                  color: brandOrange,
                },
                {
                  title: "Peace of Mind",
                  desc: "Focus on recovery instead of worrying about expenses.",
                  icon: HeartPulse,
                  color: brandBlue,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-slate-600 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual vs Family */}
        <section className="py-28 bg-white">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              Individual vs{" "}
              <span style={{ color: brandBlue }}>Family Health Plans</span>
            </h2>

            <div className="overflow-x-auto">

              <table className="w-full text-left border rounded-2xl overflow-hidden">

                <thead className="bg-slate-100">

                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4">Individual Plan</th>
                    <th className="p-4">Family Floater Plan</th>
                  </tr>

                </thead>

                <tbody className="bg-white">

                  <tr className="border-t">
                    <td className="p-4 font-semibold">Coverage</td>
                    <td className="p-4">
                      Each member gets separate sum insured
                    </td>
                    <td className="p-4">
                      One sum insured shared among family
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-semibold">Best For</td>
                    <td className="p-4">
                      Individuals with specific health needs
                    </td>
                    <td className="p-4">
                      Families with dependents
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-semibold">Premium</td>
                    <td className="p-4">Slightly higher per person</td>
                    <td className="p-4">
                      More affordable for multiple members
                    </td>
                  </tr>

                  <tr className="border-t">
                    <td className="p-4 font-semibold">Flexibility</td>
                    <td className="p-4">Personalized coverage</td>
                    <td className="p-4">
                      Convenient single plan for family
                    </td>
                  </tr>

                </tbody>

              </table>

              <p className="mt-8 text-center text-lg text-slate-600">
                Both options have advantages — our advisors help you pick the
                one that fits your needs and budget.
              </p>

            </div>

          </div>
        </section>

        {/* Benefits */}
        <section className="py-28 bg-slate-50">

          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">

            <div>

              <h2 className="text-4xl font-extrabold mb-12">
                Key <span style={{ color: brandOrange }}>Benefits</span>
              </h2>

              <div className="space-y-6">

                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm"
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

            <div className="bg-white p-16 rounded-[3rem] shadow-xl text-center">

              <h3 className="text-3xl font-bold mb-6">
                Protect Your Family’s Health Today
              </h3>

              <p className="text-lg text-slate-600 mb-10">
                Get expert guidance and compare the best health insurance plans.
              </p>

              <button className="px-9 py-4 bg-[#FF6A00] text-white rounded-xl font-semibold">
                Request Free Quote
              </button>

            </div>

          </div>

        </section>

        {/* How to Choose */}
        <section className="py-28 bg-white">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              How to Choose the{" "}
              <span style={{ color: brandBlue }}>Right Plan</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {chooseSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-10 bg-slate-50 rounded-3xl text-center"
                >

                  <step.icon
                    className="w-10 h-10 mx-auto mb-5"
                    style={{ color: step.color }}
                  />

                  <p className="text-lg font-semibold">{step.text}</p>

                </div>
              ))}
            </div>

            <p className="text-center mt-16 text-xl text-slate-600">
              💡 We make sure you choose the right health plan — affordable,
              comprehensive, and future-ready.
            </p>

          </div>

        </section>

      </main>

    

    </div>
  );
};

export default HealthInsurance;

