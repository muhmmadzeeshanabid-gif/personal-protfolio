import React from "react";

const Button = ({
  text,
  icon,
  onClick,
  className = "",
  size = "md",
  type = "button",
}) => {
  const sizeClass =
    size === "sm"
      ? "px-4 py-2 text-sm leading-5"
      : "px-[18px] py-[8px] text-base leading-6";

  const baseClass =
    "inline-flex items-center justify-center gap-2 rounded-btn transition-all duration-200 font-semibold tracking-wide border-2 border-transparent bg-primary-black text-primary-white hover:bg-zinc-500 hover:border-zinc-500 active:bg-transparent active:text-black active:border-black w-fit group";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${sizeClass} ${className}`}
    >
      {text}
      {icon && (
        <img
          src={icon}
          alt=""
          className="h-5 w-5 filter invert group-active:filter-none"
        />
      )}
    </button>
  );
};

export default Button;
