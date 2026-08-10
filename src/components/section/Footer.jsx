import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black text-primary-white py-8 sm:py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8 text-center md:text-left">
          {/* Left side - Logo/Brand */}
          <div className="flex items-center gap-1 select-none">
            <span className="text-base sm:text-lg md:text-xl font-extrabold text-white font-sora flex items-center">
              <span className="text-white font-extrabold">&lt;</span>
              <span className="bg-white text-black px-1.5 sm:px-2.5 py-0.5 mx-0.5 sm:mx-1 rounded-sm transform -skew-x-6 inline-block font-extrabold shadow-sm">
                <span className="inline-block transform skew-x-6">Zeeshan</span>
              </span>
              <span className="text-white font-mono font-bold">.Dev</span>
              <span className="text-white font-extrabold"> /&gt;</span>
            </span>
          </div>

          {/* Right side - Credits */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base">
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
