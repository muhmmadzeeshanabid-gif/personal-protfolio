import React from "react";
import { colors } from "../constants";

// import social2 from "../assets/socialicon/Social icon (2).svg";
import social3 from "../assets/socialicon/Social icon (3).svg";
import social4 from "../assets/socialicon/linkedin.svg";
 import social5 from "../assets/socialicon/icons8-github.svg";

import heroImage from "../assets/react.svg";
import myImage from "../assets/WhatsApp Image 2026-02-11 at 3.26.18 PM.jpeg";

const Hero = () => {
  return (
    <div className="relative pt-6 pb-10 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-12 gap-6">
        {/* Left Column: Content */}
        <div className="flex-1 space-y-4 md:space-y-6 md:pt-[53px] pt-0">
          <h1 className="text-[22px] min-[375px]:text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] leading-[1.5] md:leading-[1.5] tracking-[var(--tracking-tight)] text-primary-black font-normal">
            <span className="block">
              Hello I&apos;m <span className="font-extrabold">Zeeshan.</span>
            </span>
            <span className="block">
              <span className="font-extrabold uppercase">Frontend</span>{" "}
              <span className="text-outline-strong">Developer</span>
            </span>
            <span className="block">
              Based In <span className="font-extrabold">Lahore.</span>
            </span>
          </h1>

          <p className="text-[length:var(--font-size-p2)] leading-[var(--line-height-p2)] text-zinc-500 max-w-xl">
            I'm Zeeshan, a passionate front-end developer. I started my journey
            in 2025 at Droidor, where I learned HTML, CSS, JavaScript,
            Bootstrap, Tailwind CSS, React JSX, jQuery, Git, and GitHub. I love
            building clean and responsive web interfaces.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-2">
            <a
 href="https://github.com/muhmmadzeeshanabid-gif"
  target="_blank"
  rel="noopener noreferrer" className="social-icon group"
            >
              <img src={social5} alt="GitHub" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61588081470113"
  target="_blank"
  rel="noopener noreferrer" className="social-icon group">
              <img src={social3} alt="Facebook" />
            </a>
            {/* <a href="#" className="social-icon group">
              <img src={social2} alt="Twitter" />
            </a> */}
            <a  href="https://www.linkedin.com/in/muhammad-zeeshan-abid-205185385/"
  target="_blank"
  rel="noopener noreferrer" className="social-icon group">
              <img src={social4} alt="linkein" />
            </a>
          </div>
        </div>

        {/* Right Column: Image/Illustration */}
        <div className="flex-1 flex flex-col items-center justify-center md:pt-[31px] pt-0">
          <div className="relative w-full max-w-[517px]">
            <img
              src={myImage}
              alt="Professional Portrait"
              className="w-full h-auto max-h-[460px] object-cover object-top rounded-2xl shadow-xl grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
