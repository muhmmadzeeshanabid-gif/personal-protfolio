import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-primary-black text-primary-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-h2 tracking-tight font-normal mb-16">
          My <span className="font-extrabold">Projects</span>
        </h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
