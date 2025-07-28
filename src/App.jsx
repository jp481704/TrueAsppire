import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import OurService from "./components/OurService";
import OurValues from "./components/OurValues";
import AboutUs from "./components/AboutUs";

function App() {

  return (
    <>
<Navbar/>
<div className="w-[90%] lg:w-[85%] max-w-[1400px] m-auto pt-16">
  <HeroBanner />
  <OurService />
  <OurValues/>
  <AboutUs/>
</div>

    </>
  );
}

export default App;
