import React from "react";
import strategy from "../assets/images/strategy.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const OurStrategy = () => {
  const data = [
    {
      title: "TRACK RECORD",
      value: "TRACK RECORD",
      desc:
        "We have served more than 6,000 Clients with our spot-on advice on future investments. The money our investors parked ten years back has yielded them expected results.",
      icon: <TrackChangesIcon className="text-[#0057FF]" />,
    },
    {
      title: "EXPERIENCE",
      value: "EXPERIENCE",
      desc:
        "Serving the industry for the last 20 years which has made us learn great lessons about how to act when the market is shaky versus when the market is rocking.",
      icon: <EmojiEventsIcon className="text-[#FF6A00]" />,
    },
    {
      title: "TRANSPARENCY",
      value: "TRANSPARENCY",
      desc:
        "Investment is a journey which we share with our investors. We have been very open with our investors to share the risks involved in any investments to avoid any confusion.",
      icon: <LockOpenIcon className="text-[#00B894]" />,
    },
  ];

  return (
    <>
    <div className="px-4 lg:px-0">
      {/* Heading */}
      <div className="text-center mb-10 mt-10 lg:mt-16">
        <h1 className="text-4xl md:text-6xl font-extrabold relative inline-block">
          <span className="bg-gradient-to-r from-[#0057FF] to-[#FF6A00] text-transparent bg-clip-text">
            Our Strategy
          </span>
          <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#0057FF] to-[#FF6A00] opacity-30 rounded-full -z-10"></span>
        </h1>
        <div className="mt-3 h-1 w-24 md:w-32 bg-gradient-to-r from-[#0057FF] to-[#FF6A00] mx-auto rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2">
          <img src={strategy} alt="Our Strategy"  />
        </div>

        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
            Why should you choose us?
          </h2>
          <p className="text-gray-600">
            We work with change-oriented individuals to help them make better decisions, convert those decisions to actions.
          </p>

          <Tabs value={data[0].value}>
            <TabsHeader
              className="bg-gray-100 rounded-xl p-2 flex flex-col md:flex-row gap-2"
            
            >
              {data.map(({ title, value, icon }) => (
                <Tab
                  key={value}
                  value={value}
                  className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {icon}
                    <span>{title}</span>
                  </div>
                </Tab>
              ))}
            </TabsHeader>

            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white shadow text-gray-700 text-base leading-relaxed">
                    {desc}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </div>
     <style>
        {`
        .text-inherit{
        z-index: 9999 !important;
        }
       
        `}
    </style>
    </>
  );
};

export default OurStrategy;
