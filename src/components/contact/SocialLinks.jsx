import React from "react";
import social3 from "../../assets/socialicon/facebook.svg";
import social4 from "../../assets/socialicon/linkedin.svg";
import social5 from "../../assets/socialicon/icons8-github.svg";

const SocialLinks = () => {
  const linkClass =
    "group w-12 h-12 flex items-center justify-center border-2 border-primary-black rounded-btn transition-all bg-primary-white text-primary-black hover:bg-primary-black hover:text-primary-white";
  const iconClass =
    "w-6 h-6 transition-all group-hover:filter group-hover:invert";

  return (
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/muhmmadzeeshanabid-gif"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <img src={social5} alt="icon" className={iconClass} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61588081470113"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <img src={social3} alt="facebook" className={iconClass} />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-zeeshan-abid-205185385/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <img src={social4} alt="linkedin" className={iconClass} />
      </a>
    </div>
  );
};

export default SocialLinks;
