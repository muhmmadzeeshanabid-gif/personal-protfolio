// Logo
import logo from "../assets/logo/logo.svg";

// Skill Icons
import figma from "../assets/skillicon/icon-figma.svg";
import git from "../assets/skillicon/icon-git.svg";
import javascript from "../assets/skillicon/icon-javascript.svg";
import tailwind from "../assets/skillicon/icon-tailwindcss.svg";
import typescript from "../assets/skillicon/icon-typescript.svg";
import html from "../assets/skillicon/icon-html.svg";
import css from "../assets/skillicon/icon-css.svg";
import jquery from "../assets/skillicon/icon-jquery.svg";
import reactIcon from "../assets/skillicon/icon-react.svg";
import bootstrap from "../assets/skillicon/icon-bootstrap.svg";

// Project Images
import screenImg from "../assets/projects/project-brainwave.png";
import ecommerceImg from "../assets/projects/project-bar-law.png";

// Experience Icons
import droidorIcon from "../assets/cardsicon/droidor.png";

export const skills = [
  // First row on desktop
  { label: "Git", icon: git },
  { label: "JavaScript", icon: javascript },
  { label: "React", icon: reactIcon },
  { label: "Bootstrap", icon: bootstrap },
  { label: "Figma", icon: figma },
  // Second row on desktop (HTML/CSS/jQuery first)
  { label: "HTML", icon: html },
  { label: "CSS", icon: css },
  { label: "jQuery", icon: jquery },
  { label: "Tailwind", icon: tailwind },
  { label: "TypeScript", icon: typescript },
];

// Colors
export const projects = [
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
    title: "Bar Law - Professional Law Firm Website",
    description:
      "A clean and modern Law Firm website created with React and Tailwind CSS. The site features practice areas, lawyer profiles, testimonials, and a professional layout suitable for legal services. Fully responsive and optimized for fast loading.",
    image: ecommerceImg,
    link: "https://bar-law-website.vercel.app/",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah",
    role: "Developer",
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: 2,
    name: "Flora Sheen",
    role: "Designer",
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    id: 3,
    name: "Rimsha",
    role: "Designer",
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
];

export const experiences = [
  {
    company: "Droidor",
    role: "Frontend Intern",
    period: "2025 - Present",
    icon: droidorIcon,
    description:
      "I have been doing my internship at Droidor since 2025, where I work as a Frontend Intern. My role includes building responsive UI components, improving user experience, fixing bugs, and collaborating with the development team to develop real-world features using React and Tailwind CSS.",
  },
];

export { logo };
