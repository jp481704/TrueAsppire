import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSubmenu, setDesktopSubmenu] = useState(null);
  const [mobileInvesting, setMobileInvesting] = useState(false);
  const [mobileInsuring, setMobileInsuring] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `transition-all duration-300 ${
      isActive ? "text-[#FF6A00] font-semibold" : "text-gray-700"
    } hover:text-[#FF6A00]`;

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 px-4 pr-6 nav-safe ${
        isScrolled ? "bg-white shadow-md" : "bg-white md:bg-transparent"
      }`}
    >
      <div className="md:max-w-[1400px] max-w-[500px] mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center text-2xl font-bold cursor-pointer">
            <span className="text-[#0057FF]">TRUE</span>
            <span className="text-[#FF6A00]">ASPPIRE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            {/* Investing Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopSubmenu("investing")}
              onMouseLeave={() => setDesktopSubmenu(null)}
            >
              <button className="text-gray-700 hover:text-[#FF6A00]">
                Investing ▼
              </button>

              <div
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-56 transition-all ${
                  desktopSubmenu === "investing"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <NavLink
                  to="/investing/demat"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FF6A00]"
                >
                  Demat & Trading Account
                </NavLink>

                <NavLink
                  to="/investing/mutual-funds"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FF6A00]"
                >
                  Mutual Funds
                </NavLink>
              </div>
            </div>

            {/* Insuring Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopSubmenu("insuring")}
              onMouseLeave={() => setDesktopSubmenu(null)}
            >
              <button className="text-gray-700 hover:text-[#FF6A00]">
                Insuring ▼
              </button>

              <div
                className={`absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-56 transition-all ${
                  desktopSubmenu === "insuring"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <NavLink
                  to="/insuring/life-insurance"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FF6A00]"
                >
                  Life Insurance
                </NavLink>

                <NavLink
                  to="/insuring/health-insurance"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FF6A00]"
                >
                  Health Insurance
                </NavLink>

                <NavLink
                  to="/insuring/general-insurance"
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-[#FF6A00]"
                >
                  General Insurance
                </NavLink>
              </div>
            </div>

            <NavLink to="/why-choose-us" className={navLinkClass}>
              Why Choose Us
            </NavLink>

            <NavLink to="/blog" className={navLinkClass}>
              Blog / Knowledge Center
            </NavLink>

            <NavLink to="/financial-tools" className={navLinkClass}>
              Financial Tools
            </NavLink>

          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#open-account"
              className="bg-[#FF6A00] text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Open Demat Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 text-3xl"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-3 text-base font-medium">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-[#FF6A00] py-2"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-[#FF6A00] py-2"
          >
            About
          </NavLink>

          {/* Mobile Investing */}
          <div>
            <button
              onClick={() => setMobileInvesting(!mobileInvesting)}
              className="w-full flex justify-between text-gray-700 py-2"
            >
              Investing {mobileInvesting ? "▲" : "▼"}
            </button>

            {mobileInvesting && (
              <div className="pl-4">
                <NavLink
                  to="/investing/demat"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700"
                >
                  Demat & Trading Account
                </NavLink>

                <NavLink
                  to="/investing/mutual-funds"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700"
                >
                  Mutual Funds
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Insuring */}
          <div>
            <button
              onClick={() => setMobileInsuring(!mobileInsuring)}
              className="w-full flex justify-between text-gray-700 py-2"
            >
              Insuring {mobileInsuring ? "▲" : "▼"}
            </button>

            {mobileInsuring && (
              <div className="pl-4">
                <NavLink
                  to="/insuring/life-insurance"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700"
                >
                  Life Insurance
                </NavLink>

                <NavLink
                  to="/insuring/health-insurance"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700"
                >
                  Health Insurance
                </NavLink>

                <NavLink
                  to="/insuring/general-insurance"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-700"
                >
                  General Insurance
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/why-choose-us"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 py-2"
          >
            Why Choose Us
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 py-2"
          >
            Blog / Knowledge Center
          </NavLink>

          <NavLink
            to="/financial-tools"
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 py-2"
          >
            Financial Tools
          </NavLink>

          <a
            href="#open-account"
            className="block bg-[#FF6A00] text-white px-4 py-3 rounded-full text-center font-semibold"
          >
            Open Demat Account
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;