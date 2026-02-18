import React from "react";
import { skills } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="pt-10 pb-20 -mt-[3px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-h2 tracking-tight font-normal mb-12">
          My <span className="font-extrabold">Skills</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="group flex flex-col items-center justify-center border-2 border-primary-black rounded-btn py-8 transition-all hover:bg-primary-black hover:text-primary-white"
            >
              <img
                src={skill.icon}
                alt={skill.label}
                className="w-12 h-12 transition group-hover:invert mb-4"
              />
              <span className="text-h6 font-extrabold uppercase tracking-wide">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


