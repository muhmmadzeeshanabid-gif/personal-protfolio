import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-primary-black text-primary-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-h2 tracking-tight font-normal mb-16">
          My <span className="font-extrabold">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((item) => (
            <ExperienceCard key={item.company} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
