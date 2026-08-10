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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="group flex flex-col items-center justify-center border-2 border-primary-black rounded-btn p-4 sm:py-8 transition-all hover:bg-primary-black hover:text-primary-white"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                {Array.isArray(skill.icon) ? (
                  skill.icon.map((icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt={skill.label}
                      className={`w-10 h-10 sm:w-12 sm:h-12 transition duration-200 ${
                        skill.invertOnHover ? "brightness-0 group-hover:invert group-hover:brightness-100" : ""
                      }`}
                    />
                  ))
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className={`w-10 h-10 sm:w-12 sm:h-12 transition duration-200 ${
                      skill.invertOnHover ? "brightness-0 group-hover:invert group-hover:brightness-100" : ""
                    }`}
                  />
                )}
              </div>
              <span className="text-sm sm:text-h6 font-extrabold uppercase tracking-wide text-center">
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


