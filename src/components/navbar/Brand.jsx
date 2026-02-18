import React from "react";
import { logo } from "../../constants";

const Brand = () => {
  return (
    <a href="#" className="flex items-center gap-2">
      <img src={logo} alt="Personal Logo" className="h-10 w-auto" />
    </a>
  );
};

export default Brand;
