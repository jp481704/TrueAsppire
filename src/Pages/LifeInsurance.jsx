
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShieldCheck,
  Target,
  TrendingUp,
  Handshake,
  HeartHandshake,
  Goal,
  PiggyBank,
  BriefcaseBusiness,
  CheckCircle,
  Search,
  FileText,
  ArrowRight,
  MousePointerSquareDashed,
  LandmarkIcon,
} from "lucide-react";

const LifeInsurance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  const brandOrange = "#FF6A00";
  const brandBlue = "#0057FF";

  const plans = [
    {
      name: "Term Life Insurance",
      desc: "Pure protection plan offering a large cover at a low premium. Ideal for income replacement.",
      icon: ShieldCheck,
      color: "orange",
    },
    {
      name: "Whole Life Insurance",
      desc: "Provides coverage for your entire lifetime with a guaranteed death benefit.",
      icon: LandmarkIcon,
      color: "blue",
    },
    {
      name: "Endowment Plan",
      desc: "Combines insurance with savings and provides a maturity benefit if the policyholder survives.",
      icon: PiggyBank,
      color: "orange",
    },
    {
      name: "ULIP (Unit Linked Insurance Plan)",
      desc: "Investment + insurance plan with market-linked returns.",
      icon: TrendingUp,
      color: "blue",
    },
    {
      name: "Money Back Plan",
      desc: "Offers periodic payouts during the policy term along with life protection.",
      icon: HeartHandshake,
      color: "orange",
    },
  ];

  const benefits = [
    "Guaranteed financial protection for your loved ones",
    "Long-term savings and wealth creation options",
    "Tax benefits on premiums and payouts",
    "Peace of mind knowing your family is financially secure",
    "Easy claim settlement with trusted insurers",
  ];

  const approachItems = [
    { text: "Personalized insurance planning", icon: Target, color: brandBlue },
    { text: "Comparison across top insurance companies", icon: Search, color: brandOrange },
    { text: "Quick & paperless policy purchase", icon: MousePointerSquareDashed, color: brandBlue },
    { text: "Transparent premium quotes", icon: FileText, color: brandOrange },
    { text: "Claim support & renewal assistance", icon: Handshake, color: brandBlue },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">


      

        {/* What is Life Insurance */}
        <section className="bg-white overflow-hidden">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div data-aos="fade-right">

              <span className="inline-block px-4 py-1.5 mb-5 text-sm font-bold tracking-widest text-orange-600 bg-orange-50 rounded-full">
                PROTECTION FIRST
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-8">
                What is <br />
                <span style={{ color: brandBlue }}>Life Insurance?</span>
              </h1>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Life Insurance is a financial safety net that provides monetary protection to your family in case of your untimely demise. It ensures that your loved ones can maintain their lifestyle, pay off debts, and secure their future — even when you're not around.
              </p>

              <p
                className="text-lg text-slate-700 italic border-l-4 p-4 rounded-r-lg mb-10"
                style={{ borderColor: brandOrange, backgroundColor: `${brandOrange}08` }}
              >
                At TrueAsppire Finserve Pvt. Ltd., we help you select the right life insurance policy that suits your needs, goals, and budget. Through our partnership with leading insurance providers, we make the process transparent, simple, and affordable.
              </p>

              <button
                className="px-10 py-4 text-white rounded-2xl font-bold text-lg flex items-center gap-2.5 transition-all shadow-lg"
                style={{ backgroundColor: brandOrange }}
              >
                Secure Your Legacy <ArrowRight size={20} />
              </button>
            </div>

            <div data-aos="zoom-in">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop"
                alt="life insurance"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </section>

        {/* Why Life Insurance */}
        <section className="py-24 bg-slate-50">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              Why <span style={{ color: brandOrange }}>Life Insurance</span> is Important
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  title: "Financial Security 👩‍👧‍👦",
                  desc: "Protects your dependents from financial hardship.",
                  icon: ShieldCheck,
                  color: brandBlue,
                },
                {
                  title: "Debt Protection",
                  desc: "Covers outstanding home loans, personal loans, and liabilities.",
                  icon: LandmarkIcon,
                  color: brandOrange,
                },
                {
                  title: "Future Planning",
                  desc: "Helps fund children’s education and important life goals.",
                  icon: Goal,
                  color: brandBlue,
                },
                {
                  title: "Business Continuity",
                  desc: "Ensures stability for entrepreneurs and partners.",
                  icon: BriefcaseBusiness,
                  color: brandOrange,
                },
                {
                  title: "Tax Benefits",
                  desc: "Premiums eligible under Section 80C and tax-free maturity under Section 10(10D).",
                  icon: FileText,
                  color: brandBlue,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-10 bg-white rounded-3xl shadow-sm border border-slate-100"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                  <p className="text-slate-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Plans */}
        <section className="py-28 bg-white">

          <div className="container mx-auto px-6">

            <h2 className="text-5xl font-extrabold mb-16 text-center">
              Types of <span style={{ color: brandBlue }}>Life Insurance Plans</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="p-10 bg-white rounded-[2rem] shadow-sm border-t-4 hover:shadow-xl transition-all"
                  style={{
                    borderColor: plan.color === "blue" ? brandBlue : brandOrange,
                  }}
                >
                  <div className="flex items-center gap-5 mb-6">
                    <plan.icon
                      className="w-8 h-8"
                      style={{
                        color:
                          plan.color === "blue" ? brandBlue : brandOrange,
                      }}
                    />

                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>

                  <p className="text-slate-600">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-28 bg-slate-50">

          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">

            <div>

              <h2 className="text-4xl font-extrabold mb-12">
                Benefits of <span style={{ color: brandOrange }}>Life Insurance</span>
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
                Need Help Choosing the Right Policy?
              </h3>

              <p className="text-lg text-slate-600 mb-10">
                Speak with our experts to analyze your needs and find the best
                insurance plan for you.
              </p>

              <button className="px-9 py-4 bg-[#FF6A00] text-white rounded-xl font-semibold">
                Request Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-28 bg-white">

          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="financial advisor"
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <div>

              <h2 className="text-4xl font-extrabold mb-10">
                How <span style={{ color: brandBlue }}>TrueAsppire Helps</span>
              </h2>

              <p className="text-xl text-slate-600 mb-10">
                We analyze your financial situation, goals, and liabilities to
                recommend the best policy options.
              </p>

              <div className="space-y-6">

                {approachItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl"
                  >
                    <item.icon
                      className="w-9 h-9"
                      style={{ color: item.color }}
                    />

                    <p className="text-lg font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
     

 

    </div>
  );
};

export default LifeInsurance;
