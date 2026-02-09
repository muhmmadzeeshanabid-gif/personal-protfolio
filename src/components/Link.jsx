import React from "react";

const Link = ({ href, text, className = "", isActive = false, onClick }) => {
  return (
    <a
      href={href}
      className={`nav-link ${isActive ? "active" : ""} ${className}`}
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
