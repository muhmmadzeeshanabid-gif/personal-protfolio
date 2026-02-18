import React from "react";
import downloadIcon from "../../assets/othericon/icon-download.svg";
import hamburgerIcon from "../../assets/othericon/icon-menu.svg";
import Button from "../Button";
import Brand from "./Brand";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = ({ activeLink, onLinkClick, isOpen, onToggleMenu }) => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Zeeshan_CV.pdf";
    link.download = "Zeeshan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <Brand />

      <NavLinks
        className="hidden md:flex items-center gap-8"
        activeLink={activeLink}
        onLinkClick={onLinkClick}
      />

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

      {isOpen && (
        <MobileMenu
          activeLink={activeLink}
          onLinkClick={onLinkClick}
          onToggleMenu={onToggleMenu}
          onDownload={downloadCV}
        />
      )}
    </nav>
  );
};

export default Navbar;
