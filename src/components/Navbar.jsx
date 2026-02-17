import React from "react";
import { logo } from "../constants";
import downloadIcon from "../assets/othericon/download.svg";
import hamburgerIcon from "../assets/othericon/material-symbols_menu.svg";
import Button from "./Button";
import Link from "./Link";

const Navbar = ({ activeLink, onLinkClick, isOpen, onToggleMenu }) => {
  // Function to download CV from public folder
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Zeeshan_CV.pdf"; // Place your CV in public folder
    link.download = "Zeeshan_CV.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex items-center justify-between py-6">
      {/* Left - Logo + Brand (Clickable) */}
      <a href="#" className="flex items-center gap-2">
        <img src={logo} alt="Personal Logo" className="h-10 w-auto" />
      </a>

      {/* Center - Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="#about"
          text="About Me"
          isActive={activeLink === "#about"}
          onClick={onLinkClick}
        />
        <Link
          href="#skills"
          text="Skills"
          isActive={activeLink === "#skills"}
          onClick={onLinkClick}
        />
        <Link
          href="#projects"
          text="Projects"
          isActive={activeLink === "#projects"}
          onClick={onLinkClick}
        />
        <Link
          href="#contact"
          text="Contact Me"
          isActive={activeLink === "#contact"}
          onClick={onLinkClick}
        />
      </div>

      {/* Right - Desktop Resume Button / Mobile Hamburger */}
      <div className="flex items-center">
        <div className="hidden md:block">
          <Button text="Resume" icon={downloadIcon} onClick={downloadCV} />
        </div>

        <button
          type="button"
          className="md:hidden p-2 ml-4"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
        >
          <img src={hamburgerIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary-white z-50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </a>
            <button onClick={onToggleMenu} className="text-4xl">
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-6 text-center mt-6">
            <Link
              href="#about"
              text="About Me"
              className="text-xl"
              isActive={activeLink === "#about"}
              onClick={onLinkClick}
            />
            <Link
              href="#skills"
              text="Skills"
              className="text-xl"
              isActive={activeLink === "#skills"}
              onClick={onLinkClick}
            />
            <Link
              href="#projects"
              text="Projects"
              className="text-xl"
              isActive={activeLink === "#projects"}
              onClick={onLinkClick}
            />
            <Link
              href="#contact"
              text="Contact Me"
              className="text-xl"
              isActive={activeLink === "#contact"}
              onClick={onLinkClick}
            />
            <div className="pt-2 flex justify-center">
              <Button text="Resume" icon={downloadIcon} onClick={downloadCV} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
