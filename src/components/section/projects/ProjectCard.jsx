import React from "react";
import linkIcon from "../../../assets/othericon/read-more.svg";
import githubIcon from "../../../assets/socialicon/icons8-github.svg";

const ProjectCard = ({ project, reverse }) => {
  return (
    <div
      className={`flex flex-col md:items-stretch items-center gap-6 sm:gap-10 md:gap-20 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1 w-full">
        <div
          className="relative w-full aspect-[16/10] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 group"
        >
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full ${
              project.imageFit === "contain" ? "object-contain" : "object-cover"
            } ${
              project.imagePosition === "top"
                ? "object-top"
                : project.imagePosition === "bottom"
                ? "object-bottom"
                : project.imagePosition === "left"
                ? "object-left"
                : project.imagePosition === "right"
                ? "object-right"
                : "object-center"
            } transition-transform duration-500 group-hover:scale-105`}
          />
        </div>
      </div>

      <div className="flex-1 space-y-4 md:space-y-6">
        <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-600">
          {project.id}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
          {project.description}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs md:text-sm font-semibold rounded-sm border border-zinc-800 text-zinc-400 bg-zinc-900"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-sm md:text-base font-semibold border-2 border-zinc-700 bg-transparent hover:bg-zinc-500 hover:border-zinc-500 hover:text-white px-5 py-2.5 rounded-btn transition-all duration-200 text-zinc-300 shadow-md cursor-pointer"
            >
              <img
                src={linkIcon}
                alt="Live Demo"
                className="w-4 h-4 md:w-5 md:h-5 filter invert"
              />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-sm md:text-base font-semibold border-2 border-zinc-700 bg-transparent hover:bg-zinc-500 hover:border-zinc-500 hover:text-white px-5 py-2.5 rounded-btn transition-all duration-200 text-zinc-300 shadow-md cursor-pointer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-4 h-4 md:w-5 md:h-5 filter invert"
              />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
