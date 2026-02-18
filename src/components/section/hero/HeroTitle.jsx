import React from "react";

const HeroTitle = () => {
  return (
    <h1 className="text-[22px] min-[375px]:text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] leading-[1.5] md:leading-[1.5] tracking-tight text-primary-black font-normal">
      <span className="block">
        Hello I&apos;m <span className="font-extrabold">Zeeshan.</span>
      </span>
      <span className="block">
        <span className="font-extrabold uppercase">Frontend</span>{" "}
        <span
          className="font-extrabold uppercase text-primary-white"
          style={{
            WebkitTextStroke: "6px #000000",
            WebkitTextFillColor: "#ffffff",
            paintOrder: "stroke",
            color: "#ffffff",
          }}
        >
          Developer
        </span>
      </span>
      <span className="block">
        Based In <span className="font-extrabold">Lahore.</span>
      </span>
    </h1>
  );
};

export default HeroTitle;
