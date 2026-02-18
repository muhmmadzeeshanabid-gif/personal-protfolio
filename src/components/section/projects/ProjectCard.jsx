import React from "react";
import linkIcon from "../../../assets/othericon/read-more.svg";

const ProjectCard = ({ project, reverse }) => {
  return (
    <div
      className={`flex flex-col items-center gap-12 md:gap-20 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1 w-full">
        <a
          href={project.link || "#"}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noreferrer noopener" : undefined}
          className="md:hidden block"
        >
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer border border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </a>

        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer border border-zinc-800 hidden md:block">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="flex-1 space-y-4 md:space-y-6">
        <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
          {project.id}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
          {project.description}
        </p>
        <a
          href={project.link || "#"}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noreferrer noopener" : undefined}
          className="inline-block transition-transform hover:scale-110"
        >
          <img
            src={linkIcon}
            alt="View Project"
            className="w-6 h-6 md:w-8 md:h-8 filter invert"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
