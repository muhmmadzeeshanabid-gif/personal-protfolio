import React from "react";
import aboutMeImg from "../assets/about-me.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-24">
          {/* Illustration Section */}
          <div className="relative w-full max-w-[500px] flex-shrink-0 flex flex-col items-center lg:items-start">
            {/* Left Blue Accent */}
            <div className="absolute top-1/2 -left-10 w-1 h-8 bg-sky-400 -translate-y-1/2 hidden md:block"></div>

            <div className="border-2 border-primary-black pt-6 px-6 rounded-2xl bg-primary-white shadow-xl relative z-10 overflow-hidden flex items-end">
              <img
                src={aboutMeImg}
                alt="Zeeshan - Full Stack Developer"
                className="w-full h-auto max-h-[420px] object-contain grayscale"
              />
            </div>

            {/* Bottom Blue Accent (Centered) - Desktop Only */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-8 h-1 bg-sky-400 hidden lg:block"></div>
            {/* Right Blue Accent */}
            <div className="absolute top-1/2 -right-10 w-1 h-8 bg-sky-400 -translate-y-1/2 hidden md:block"></div>

            {/* Static Divider for Mobile (Image Bottom) */}
            <div className="w-8 h-1 bg-sky-400 mt-12 lg:hidden"></div>
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-8 relative pt-4 lg:pt-0">
            <h2 className="text-4xl md:text-5xl tracking-tight font-normal text-primary-black">
              About <span className="font-extrabold">Me</span>
            </h2>

            <div className="space-y-6 text-zinc-500 text-sm md:text-base leading-relaxed">
              <p>
                I'm a passionate, self-taught front-end developer focused on
                creating modern, responsive, and visually appealing user
                interfaces. I care deeply about user experience, pixel-perfect
                design, and writing clean, high-performance code.
              </p>
              <p>
                My development journey began in 2025 at Droidor, where I stepped
                into the world of web development. Since then, I’ve built strong
                skills in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React
                JSX, Media Queries, Git, GitHub, and jQuery — and I’m
                continuously growing as a developer every day.
              </p>
              <p>
                When I’m not coding, I love exploring startup journeys, staying
                active in the tech community, and discovering new ideas that
                inspire me. You can connect with me on GitHub or follow me for
                more tech content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
