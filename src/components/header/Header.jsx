import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Hero from "../hero/Hero";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar
          activeLink={activeLink}
          onLinkClick={handleLinkClick}
          isOpen={isOpen}
          onToggleMenu={() => setIsOpen((prev) => !prev)}
        />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
