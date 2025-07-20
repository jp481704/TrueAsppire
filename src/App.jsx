import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";

function App() {

  return (
    <>
<Navbar/>
<div className="w-[90%] lg:w-[85%] max-w-[1400px] m-auto pt-16">
  <HeroBanner />
</div>

    </>
  );
}

export default App;
