import React from "react";
import Button from "../../common/Button";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import downloadIcon from "../../../assets/othericon/icon-download.svg";

const MobileMenu = ({ activeLink, onLinkClick, onToggleMenu, onDownload }) => {
  return (
    <div className="fixed inset-0 bg-primary-white z-50 p-6 flex flex-col overflow-y-auto">
      <div className="flex justify-between items-center mb-8">
        <Brand />
        <button onClick={onToggleMenu} className="text-4xl p-2 text-primary-black" aria-label="Close">
          &times;
        </button>
      </div>
      <div className="flex flex-col gap-6 text-center my-auto py-6">
        <NavLinks
          activeLink={activeLink}
          onLinkClick={onLinkClick}
          className="flex flex-col gap-6 text-lg font-medium"
        />
        <div className="pt-4 flex justify-center">
          <Button text="Resume" icon={downloadIcon} onClick={onDownload} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
