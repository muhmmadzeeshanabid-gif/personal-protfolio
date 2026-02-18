import React from "react";
import Link from "../Link";

const NAV_LINKS = [
  { href: "#about", text: "About Me" },
  { href: "#skills", text: "Skills" },
  { href: "#projects", text: "Projects" },
  { href: "#contact", text: "Contact Me" },
];

const NavLinks = ({ activeLink, onLinkClick, className = "" }) => {
  return (
    <div className={className}>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          text={link.text}
          isActive={activeLink === link.href}
          onClick={onLinkClick}
        />
      ))}
    </div>
  );
};

export default NavLinks;
