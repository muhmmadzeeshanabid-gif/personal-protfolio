import React from "react";
import { logo } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Personal Logo"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Right side - Credits */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-zinc-400 text-sm md:text-base">
              @ 2025-{currentYear}{" "}
              <span className="text-white font-semibold">Zeeshan Abid</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
