import React from "react";
import droidorIcon from "../assets/cardsicon/download.png";

const experiences = [
  {
    company: "Droidor",
    role: "Frontend Intern",
    period: "2025 – Present",
    icon: droidorIcon,
    description:
      "I have been doing my internship at Droidor since 2025, where I work as a Frontend Intern. My role includes building responsive UI components, improving user experience, fixing bugs, and collaborating with the development team to develop real-world features using React and Tailwind CSS.",
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
          {experiences.map((item) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
