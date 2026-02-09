import React from "react";

const Button = ({ text, icon, onClick, className = "", size = "md", type = "button" }) => {
  const sizeClass = size === "sm" ? "btn-sm" : "btn-md";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-primary ${sizeClass} ${className} flex items-center gap-2`}
    >
      {text}
      {icon && <img src={icon} alt="" className="h-5 w-5" />}
    </button>
  );
};

export default Button;
