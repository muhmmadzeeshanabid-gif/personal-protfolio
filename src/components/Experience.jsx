import React from "react";
import youtubeIcon from "../assets/cardsicon/youtube.svg";
import googleIcon from "../assets/cardsicon/google.svg";
import appleIcon from "../assets/cardsicon/apple.svg";

const experiences = [
  {
    company: "Google",
    role: "Lead Software Engineer",
    period: "Jan 2026 – Present",
    icon: googleIcon,
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    company: "YouTube",
    role: "Software Engineer",
    period: "Mar 2025 – Dec 2025",
    icon: youtubeIcon,
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  },
  {
    company: "Apple",
    role: "Junior Software Engineer",
    period: "Jan 2025 – Feb 2025",
    icon: appleIcon,
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team of developers to ensure high-quality delivery.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-primary-black text-primary-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--tracking-tight)] font-normal mb-16">
          My <span className="font-extrabold">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((item, index) => {
            return (
              <article
                key={item.company}
                className="border-2 border-zinc-800 rounded-[var(--radius-btn)] p-8 transition-all bg-transparent hover:bg-[#27272a] hover:border-zinc-700 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <img src={item.icon} alt={item.company} className="h-8 w-8" />
                    <h3 className="text-xl md:text-2xl font-bold text-primary-white">
                      {item.role} at {item.company}
                    </h3>
                  </div>
                  <span className="text-base font-semibold text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
