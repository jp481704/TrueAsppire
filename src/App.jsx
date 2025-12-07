import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Demat from "./Pages/Demat";
import MutualFunds from "./Pages/MutualFunds ";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />

      <div className="w-[90%] lg:w-[85%] max-w-[1400px] m-auto pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Investing Sub Routes */}
          <Route path="/investing/demat" element={<Demat />} />
          <Route path="/investing/mutual-funds" element={<MutualFunds />} />

        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
