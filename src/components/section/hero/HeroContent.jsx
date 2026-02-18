import React from "react";
import HeroSocialLinks from "./HeroSocialLinks";
import HeroTitle from "./HeroTitle";

const HeroContent = () => {
  return (
    <div className="flex-1 space-y-4 md:space-y-6 md:pt-[53px] pt-0">
      <HeroTitle />

      <p className="text-p2 text-zinc-500 max-w-xl">
        I'm Zeeshan, a passionate front-end developer. I started my journey in
        2025 at Droidor, where I learned HTML, CSS, JavaScript, Bootstrap,
        Tailwind CSS, React JSX, jQuery, Git, and GitHub. I love building clean
        and responsive web interfaces.
      </p>

      <HeroSocialLinks />
    </div>
  );
};

export default HeroContent;
