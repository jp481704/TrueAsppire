// Footer.jsx
import React from "react";
import {
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { LocationOn, Phone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <Typography variant="h5" className="mb-3 font-bold">
            Our Company
          </Typography>
          <Typography variant="paragraph" className="text-gray-300">
            We deliver enduring results. Financial advising is an accountable job, and we understand it to its core. Our experience helps us tackle any market ups and downs.
          </Typography>
        </div>

        {/* Contact Info */}
        <div>
          <Typography variant="h5" className="mb-3 font-bold">
            Contact Us
          </Typography>
          <div className="flex items-start gap-3 mb-2">
            <LocationOn />
            <span>123 Finance Street, Business Bay, Mumbai, India</span>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <Phone />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-start gap-3">
            <Email />
            <span>info@company.com</span>
          </div>
        </div>

        {/* Social & Links */}
        <div>
          <Typography variant="h5" className="mb-3 font-bold">
            Follow Us
          </Typography>
          <div className="flex gap-4">
            <button className="border border-solid px-4 py-2 rounded-[10px] hover:text-blue-500 hover:scale-110 transition duration-300" variant="text" color="white">
              <i className="fab fa-facebook-f text-xl" />
            </button>
            <button className="border border-solid px-3 py-2 rounded-[10px] hover:text-sky-400 hover:scale-110 transition duration-300" variant="text" color="white">
              <i className="fab fa-twitter text-xl" />
            </button>
            <button className="border border-solid px-3 py-2 rounded-[10px] hover:text-pink-500 hover:scale-110 transition duration-300" variant="text" color="white">
              <i className="fab fa-instagram text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Our Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
