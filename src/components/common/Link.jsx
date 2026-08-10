import React from "react";

const Link = ({ href, text, className = "", isActive = false, onClick }) => {
  const baseClass =
    "font-bold cursor-pointer transition-all border-b-2 border-transparent text-base leading-6 text-primary-black pb-1 hover:text-zinc-500 hover:border-zinc-500";

  return (
    <a
      href={href}
      className={`${baseClass} ${isActive ? "text-primary-black" : ""} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(href);
      }}
    >
      {text}
    </a>
  );
};

export default Link;
