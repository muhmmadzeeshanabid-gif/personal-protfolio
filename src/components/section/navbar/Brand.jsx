import React from "react";

const Brand = () => {
  return (
    <a href="#" className="flex items-center gap-1 group cursor-pointer select-none">
      <span className="text-base sm:text-lg md:text-2xl font-extrabold text-primary-black font-sora flex items-center">
        <span className="text-primary-black font-extrabold">&lt;</span>
        <span className="bg-primary-black text-primary-white px-1.5 sm:px-2.5 py-0.5 mx-0.5 sm:mx-1 rounded-sm transform -skew-x-6 inline-block font-extrabold shadow-sm group-hover:bg-zinc-800 transition-all">
          <span className="inline-block transform skew-x-6">Zeeshan</span>
        </span>
        <span className="text-primary-black font-mono font-bold">.Dev</span>
        <span className="text-primary-black font-extrabold"> /&gt;</span>
      </span>
    </a>
  );
};

export default Brand;
