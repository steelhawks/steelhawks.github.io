import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <div className="w-[100vw] h-20 border-t-2">
      <div className="flex justify-center mt-2 space-x-3">
        <a
          className="hover:text-black"
          href="https://www.instagram.com/steelhawks2601/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={brands("instagram")} size="3x" />
        </a>
        <a
          href="https://www.youtube.com/@steelhawks2601/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="3x" icon={brands("youtube")} />
        </a>
        <a
          href="https://www.thebluealliance.com/team/2601"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/tba.svg"
            alt=""
            className="inline-block align-baseline h-[48px]"
          />
        </a>
        <a
          href="https://github.com/steelhawks"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon size="3x" icon={brands("github")} />
        </a>
      </div>
      <p className="mb-2">©2022</p>
    </div>
  );
};
export default Footer;
