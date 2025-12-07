import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSubmenu, setDesktopSubmenu] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(false);
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
  className={`fixed w-full z-50 transition-all duration-300 px-4 pr-6 nav-safe ${
    isScrolled ? "bg-white shadow-md" : "bg-white md:bg-transparent"
  }`}
>
      <div className="md:max-w-[1400px]  max-w-[500px] mx-auto px-4 lg:px-0">
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

            {/* Desktop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopSubmenu(true)}
              onMouseLeave={() => setDesktopSubmenu(false)}
            >
              <button className="text-gray-700 hover:text-[#FF6A00] transition-all duration-300">
                Investing ▼
              </button>

              {desktopSubmenu && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-56 z-50">
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
              )}
            </div>

            <NavLink to="/insuring" className={navLinkClass}>
              Insuring
            </NavLink>
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

          {/* Mobile Menu Icon */}
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

      {/* ------------------ MOBILE MENU ------------------ */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-4 text-sm font-medium">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            About
          </NavLink>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setMobileSubmenu(!mobileSubmenu)}
              className="w-full text-left text-gray-700 hover:text-[#FF6A00] transition-all duration-300"
            >
              Investing {mobileSubmenu ? "▲" : "▼"}
            </button>

            {mobileSubmenu && (
              <div className="pl-4 mt-2 space-y-2">
                <NavLink
                  to="/investing/demat"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileSubmenu(false);
                  }}
                  className={navLinkClass}
                >
                  Demat & Trading Account
                </NavLink>

                <NavLink
                  to="/investing/mutual-funds"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileSubmenu(false);
                  }}
                  className={navLinkClass}
                >
                  Mutual Funds
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/insuring"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Insuring
          </NavLink>

          <NavLink
            to="/why-choose-us"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Why Choose Us
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Blog / Knowledge Center
          </NavLink>

          <NavLink
            to="/financial-tools"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            Financial Tools
          </NavLink>

          <a
            href="#open-account"
            className="block bg-[#FF6A00] text-white px-4 py-2 rounded-full text-center hover:bg-orange-600 transition"
          >
            Open Demat Account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
