import React from "react";
import myImage from "../../assets/hero-profile.jpeg";

const HeroImage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center md:pt-[31px] pt-0">
      <div className="relative w-full max-w-[517px]">
        <img
          src={myImage}
          alt="Professional Portrait"
          className="w-full h-auto max-h-[460px] object-cover object-top rounded-2xl shadow-xl grayscale"
        />
      </div>
    </div>
  );
};

export default HeroImage;
