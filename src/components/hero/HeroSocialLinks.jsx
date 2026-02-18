import React from "react";
import facebookIcon from "../../assets/socialicon/facebook.svg";
import linkedinIcon from "../../assets/socialicon/linkedin.svg";
import githubIcon from "../../assets/socialicon/icons8-github.svg";

const ICON_CLASS =
  "w-6 h-6 transition-all group-hover:filter group-hover:invert";
const LINK_CLASS =
  "group w-12 h-12 flex items-center justify-center border-2 border-primary-black rounded-btn transition-all bg-primary-white text-primary-black hover:bg-primary-black hover:text-primary-white";

const HeroSocialLinks = () => {
  return (
    <div className="flex items-center gap-6 pt-2">
      <a
        href="https://github.com/muhmmadzeeshanabid-gif"
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        <img src={githubIcon} alt="GitHub" className={ICON_CLASS} />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61588081470113"
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        <img src={facebookIcon} alt="Facebook" className={ICON_CLASS} />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-zeeshan-abid-205185385/"
        target="_blank"
        rel="noopener noreferrer"
        className={LINK_CLASS}
      >
        <img src={linkedinIcon} alt="LinkedIn" className={ICON_CLASS} />
      </a>
    </div>
  );
};

export default HeroSocialLinks;
