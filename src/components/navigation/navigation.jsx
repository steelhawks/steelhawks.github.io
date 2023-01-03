import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { pages } from "../../routes/routes";
import OurTeamDropdown from "./ourTeamDropdown";

const NewNavigation = (props) => {
  const [toggleState, setToggleState] = useState(false); //mobile

  const doNotDisplay = [
    "Home",
    "Leadership",
    "Mentors",
    "Subteams",
    "Boba",
    "Steelbucks",
  ];

  return (
    <div>
      {/*desktop nav*/}
      <ul className="py-2 px-6 mb-0 text-lg justify-between uppercase items-center hidden lg:flex align-middle h-auto">
        <li>
          <a href="/">
            <img alt="" className="h-[2.6rem]" src="media/2601Hawk.svg" />
          </a>
        </li>
        <OurTeamDropdown />
        {pages.map((page) => {
          if (doNotDisplay.indexOf(page.name) === -1) {
            return (
              <li className="navButton">
                <a href={page.path}>{page.name}</a>
              </li>
            );
          }
        })}
      </ul>

      {/*mobile nav*/}
      <div className="lg:hidden flex justify-center align-middle z-30 lg:w-0">
        <h2 className="drop-shadow-none text-xl flex py-1.5">
          FRC 2601 STEEL HAWKS
        </h2>
        <button
          className="z-30 m-2 fixed right-[5%] top-0"
          onClick={() => {
            setToggleState(!toggleState);
          }}
        >
          <FontAwesomeIcon
            className="bg-background rounded px-1"
            icon={solid("bars")}
            size="lg"
          />
        </button>
        <ul
          className={` z-20 ease-in-out duration-[400ms] ${
            toggleState ? "top-0 overflow-hidden inline" : "top-[-280%]"
          } fixed w-screen h-screen`}
        >
          <li className="flex justify-center">
            <a className="h-fit mx-0 mt-2 inline justify-center" href="/">
              <img alt="" className="h-20 m-4" src="media/2601Hawk.svg" />
            </a>
          </li>
          {pages.map((page) => {
            if (
              doNotDisplay.indexOf(page.name) === -1 ||
              page.name === "Leadership" ||
              page.name === "Mentors" ||
              page.name === "Subteams"
            ) {
              return (
                <li className="flex justify-center mb-4 relative navButton">
                  <a href={page.path}>{page.name}</a>
                </li>
              );
            }
          })}
          <div className="flex justify-center"></div>
          <p className="text-white absolute top-[97%] left-2 bg-transparent text-xs">
            made with love by hand {`<3`}
          </p>
        </ul>
      </div>
    </div>
  );
};

export default NewNavigation;
