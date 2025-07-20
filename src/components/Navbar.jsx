import React, { useState, useEffect } from 'react';

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Investing', href: '#investing' },
  { name: 'Insuring', href: '#insuring' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Blog / Knowledge Center', href: '#blog' },
  { name: 'Financial Tools', href: '#tools' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      for (const section of sections) {
        const el = document.querySelector(section.href);
        if (el) {
          const top = el.offsetTop - 80;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(section.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center text-2xl font-bold">
            <span className="text-[#0057FF]">TRUE</span>
            <span className="text-[#FF6A00]">ASPPIRE</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {sections.map((section) => (
              <a
                key={section.name}
                href={section.href}
                className={`group relative transition-all duration-300 ${
                  activeSection === section.href
                    ? 'text-[#FF6A00] font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {section.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6A00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#open-account"
              className="bg-[#FF6A00] text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Open Demat Account
            </a>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 text-3xl">
              <span className="material-icons">
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with fade effect */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-4 text-sm font-medium transition-opacity duration-500">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              className={`block relative group transition-colors duration-300 ${
                activeSection === section.href
                  ? 'text-[#FF6A00] font-semibold'
                  : 'text-gray-700'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {section.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF6A00] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
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
