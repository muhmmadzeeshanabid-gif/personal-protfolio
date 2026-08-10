// Logo
import logo from "../assets/logo/logo.png";

// Skill Icons
import git from "../assets/skillicon/icon-git.svg";
import javascript from "../assets/skillicon/icon-javascript.svg";
import tailwind from "../assets/skillicon/icon-tailwindcss.svg";
import typescript from "../assets/skillicon/icon-typescript.svg";
import html from "../assets/skillicon/icon-html.svg";
import css from "../assets/skillicon/icon-css.svg";
import reactIcon from "../assets/skillicon/icon-react.svg";
import nextjs from "../assets/skillicon/icon-nextjs.svg";
import firebase from "../assets/skillicon/icon-firebase.svg";
import supabase from "../assets/skillicon/icon-supabase.svg";
import authjs from "../assets/skillicon/icon-authjs.svg";
import stripe from "../assets/skillicon/icon-stripe.svg";
import githubSkill from "../assets/skillicon/icon-github-skill.svg";
import bootstrap from "../assets/skillicon/icon-bootstrap.svg";
import jquery from "../assets/skillicon/icon-jquery.svg";

// Project Images
import orinBlogImg from "../assets/projects/orin-blog.png";
import kyraChatImg from "../assets/projects/kyra-chat.png";
import ecommerceImg from "../assets/projects/zara-store.png";
import zeeBoxImg from "../assets/projects/zee-box.png";
import ycDirectoryImg from "../assets/projects/yc-directory.png";
import weatherAppImg from "../assets/projects/weather-app.png";
import exploreTechImg from "../assets/projects/explore-tech.png";
import brainwaveImg from "../assets/projects/brainwave.png";

// Experience Icons
import DroidorIcon from "../assets/cardsicon/droidor.png";

export const skills = [
  { label: "HTML", icon: html },
  { label: "CSS", icon: css },
  { label: "JavaScript (ES6+)", icon: javascript },
  { label: "TypeScript", icon: typescript },
  { label: "React", icon: reactIcon, invertOnHover: true },
  { label: "Next.js", icon: nextjs, invertOnHover: true },
  { label: "Tailwind CSS", icon: tailwind, invertOnHover: true },
  { label: "Bootstrap", icon: bootstrap, invertOnHover: true },
  { label: "jQuery", icon: jquery, invertOnHover: true },
  { label: "Git", icon: git, invertOnHover: true },
  { label: "GitHub", icon: githubSkill, invertOnHover: true },
  { label: "Firebase", icon: firebase },
  { label: "Supabase", icon: supabase },
  { label: "Auth.js", icon: authjs, invertOnHover: true },
  { label: "Stripe API", icon: stripe },
];

export const projects = [
  {
    id: "01",
    title: "Orin - Minimal Blog",
    description: "Engineered a high-performance blogging platform with dynamic rendering via Next.js App Router and Supabase. Features Gemini AI post generation, 100+ active sessions support, and a real-time admin analytics dashboard.",
    image: orinBlogImg,
    link: "https://blog-dashboard-indol.vercel.app/",
    github: "https://github.com/muhmmadzeeshanabid-gif/blog-dashboard",
    tags: ["Next.js", "Supabase", "Gemini API", "Tailwind CSS", "TypeScript"],
    imagePosition: "top"
  },
  {
    id: "02",
    title: "Zee Box - Movie Streaming",
    description: "Built an interactive movie discovery platform with embedded playable video trailers, category navigation, real-time search, and trending feeds. Developed using React, TypeScript, and movie REST APIs in a dark-mode layout.",
    image: zeeBoxImg,
    link: "https://cineversehub.vercel.app/",
    github: "https://github.com/muhmmadzeeshanabid-gif/MovieSearch-Web",
    tags: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    imagePosition: "top"
  },
  {
    id: "03",
    title: "Zara - Store Clone",
    description: "Developed an e-commerce store with real-time product catalogs powered by Firebase Firestore. Integrated Stripe Payment gateway for transactions, persistent shopping cart state, and a responsive Tailwind CSS interface.",
    image: ecommerceImg,
    link: "https://ecommerce-store-pink-five.vercel.app/",
    github: "https://github.com/muhmmadzeeshanabid-gif/Ecommerce-Store",
    tags: ["React.js", "Firebase", "Stripe API", "Tailwind CSS"],
    imagePosition: "top"
  },
  {
    id: "04",
    title: "YC - Directory",
    description: "Engineered a startup pitch platform for entrepreneurs to submit ideas, track real-time view counts, and manage posts. Integrated GitHub & Google OAuth login, Sanity CMS headless content management, and dynamic category search.",
    image: ycDirectoryImg,
    link: "https://yc-directory-ebon-phi.vercel.app/",
    github: "https://github.com/muhmmadzeeshanabid-gif/yc_directory",
    tags: ["Next.js", "Sanity CMS", "TypeScript", "NextAuth / OAuth", "Tailwind CSS"],
    imagePosition: "top"
  },
  {
    id: "05",
    title: "Kyra - AI Chat Assistant",
    description: "Designed and built an interactive AI chat assistant enabling multi-user chat sessions with custom system instructions. Features Firebase authentication, real-time Firestore conversation history, and Next.js Route Handlers.",
    image: kyraChatImg,
    link: "https://ai-website-ruby-zeta.vercel.app/",
    github: "https://github.com/muhmmadzeeshanabid-gif/AI-Website",
    tags: ["Next.js", "Firebase", "Gemini API", "Tailwind CSS", "TypeScript"],
    imagePosition: "center"
  },
  {
    id: "06",
    title: "Weather App",
    description: "Developed a real-time weather website delivering live location forecasts, barometer pressure readings, air quality metrics, and 12-hour temperature trends. Features dynamic background transitions based on weather using React and Weather API.",
    image: weatherAppImg,
    link: "https://weather-app-green-two-24.vercel.app/",
    github: "https://github.com/muhmmadzeeshanabid-gif",
    tags: ["React", "Weather API", "JavaScript", "Tailwind CSS", "REST API"],
    imagePosition: "top"
  },
  {
    id: "07",
    title: "ExploreTECH - Platform Clone",
    description: "Engineered ExploreTECH, a dual-language (Arabic & English) hospitality technology web platform. Features multi-language internationalization (i18n), smooth UI animations, product categories, and interactive vendor advisory tools built with React.",
    image: exploreTechImg,
    link: "https://explore-tech.vercel.app/en",
    github: "https://github.com/muhmmadzeeshanabid-gif/ExploreTech",
    tags: ["React", "i18next", "Framer Motion", "Tailwind CSS", "JavaScript"],
    imagePosition: "top"
  },
  {
    id: "08",
    title: "Brainwave - AI Landing Page",
    description: "Engineered Brainwave, a modern AI landing page featuring complex parallax scroll animations, dynamic bento grids, and interactive UI components. Built using React, Tailwind CSS, and scroll animation libraries.",
    image: brainwaveImg,
    link: "https://brainwave-orcin-six.vercel.app/",
    github: "https://github.com/muhmmadzeeshanabid-gif/Brainwave",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Scroll Animations", "JavaScript"],
    imagePosition: "top"
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
    role: "Frontend Web Developer (Intern)",
    period: "May 2025 – Present",
    icon: DroidorIcon,
    description:
      "Working as a Frontend Web Developer Intern at Droidor, specializing in building high-performance, responsive web applications using React, Next.js, and Tailwind CSS. Key contributions include engineering 15+ reusable UI components, optimizing initial page load times by 28%, integrating 8+ REST and serverless API endpoints using Supabase and Firebase, implementing secure Auth.js authentication, and building seamless Stripe checkout pipelines.",
  },
];

export { logo };

