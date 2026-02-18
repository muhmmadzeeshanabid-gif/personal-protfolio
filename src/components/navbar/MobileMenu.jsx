import React from "react";
import Button from "../Button";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import downloadIcon from "../../assets/othericon/icon-download.svg";

const MobileMenu = ({ activeLink, onLinkClick, onToggleMenu, onDownload }) => {
  return (
    <div className="fixed inset-0 bg-primary-white z-50 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <Brand />
        <button onClick={onToggleMenu} className="text-4xl" aria-label="Close">
          &times;
        </button>
      </div>
      <div className="flex flex-col gap-6 text-center mt-6">
        <NavLinks
          activeLink={activeLink}
          onLinkClick={onLinkClick}
          className="flex flex-col gap-6"
        />
        <div className="pt-2 flex justify-center">
          <Button text="Resume" icon={downloadIcon} onClick={onDownload} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
