// Logo
import logo from "../assets/logo/logo.svg";

// Skill Icons
import figma from "../assets/skillicon/icon-figma.svg";
import git from "../assets/skillicon/icon-git.svg";
import javascript from "../assets/skillicon/icon-javscript.svg";
import tailwind from "../assets/skillicon/icon-tailwindcss.svg";
import typescript from "../assets/skillicon/icon-typescript.svg";
import html from "../assets/skillicon/icon-html.svg";
import css from "../assets/skillicon/icon-css.svg";
import jquery from "../assets/skillicon/icon-jquery.svg";
import reactIcon from "../assets/skillicon/icon-react.svg";
import bootstrap from "../assets/skillicon/icon-bootstrap.svg";

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
export const colors = {
  // Primary Colors
  black: "#000000",
  neutral: "#404040",
  white: "#ffffff",

  // Brand grays for buttons / hovers
  primaryGray: "#525252",

  // Zinc
  zinc100: "#f4f4f5",
  zinc200: "#e4e4e7",
  zinc300: "#d4d4d8",
  zinc500: "#71717a",
  zinc800: "#27272a",

  // Error
  error500: "#ef4444",
};

export { logo };
