import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../constants";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-primary-black text-primary-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-h2 tracking-tight font-normal mb-16">
          My <span className="font-extrabold">Projects</span>
        </h2>

        <div className="space-y-24 md:space-y-32">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center pt-16 md:pt-20">
            <button
              type="button"
              onClick={handleToggle}
              className="px-8 py-3.5 text-base font-semibold border-2 border-primary-black rounded-btn transition-all duration-200 bg-primary-black text-primary-white hover:bg-zinc-500 hover:border-zinc-500 shadow-lg cursor-pointer"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
