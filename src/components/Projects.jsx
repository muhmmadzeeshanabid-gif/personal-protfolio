import React from "react";
import screenImg from "../assets/projects/Screenshot 2026-02-09 103501.png";
import ecommerceImg from "../assets/projects/Screenshot 2026-02-11 174943.png";
import blogImg from "../assets/projects/blog.png";
import linkIcon from "../assets/othericon/Read More.svg";

const projects = [
  {
    id: "01",
    title: "Brainwave - AI Chat Demo",
    description:
      "A fully responsive AI Chat UI built using React, JSX, and Tailwind CSS. This project includes smooth animations, interactive chat components, and a modern layout inspired by real AI chat experiences.",
    image: screenImg,
    link: "https://brainwave-orcin-six.vercel.app/",
  },

  {
    id: "02",
    title: "Bar Law — Professional Law Firm Website",
    description:
      "A clean and modern Law Firm website created with React and Tailwind CSS. The site features practice areas, lawyer profiles, testimonials, and a professional layout suitable for legal services. Fully responsive and optimized for fast loading.",
    image: ecommerceImg,
    link: "https://bar-law-website.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-primary-black text-primary-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--tracking-tight)] font-normal mb-16">
          My <span className="font-extrabold">Projects</span>
        </h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={project.id}
                className={`flex flex-col items-center gap-12 md:gap-20 ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="flex-1 w-full">

                  {/* Mobile: Clickable Image */}
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

                  {/* Desktop: Only hover, no click */}
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
