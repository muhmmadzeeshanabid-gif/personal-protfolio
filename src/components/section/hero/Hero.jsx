import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="relative pt-6 pb-10 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-12 gap-6">
        <HeroContent />
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
