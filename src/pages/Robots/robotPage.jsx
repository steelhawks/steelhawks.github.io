import React, { useState } from "react";
import { robotData } from "./robotData";
import MediaChooser from "../../components/mediaChooser";

const RobotPage = () => {
  return (
    <div>
      <h1 className="pageTitle">Robots</h1>
      {robotData.map((robot) => {
        return (
          <section className="">
            <h2 className="text-2xl md:text-4xl mb-2 overflow-hidden text-center">
              {robot.year} - {robot.name}
            </h2>
            <div className="flex justify-center">
              <MediaChooser
                type={robot.type}
                images={robot.fileNames}
                video={robot.video}
                location={"robots/" + robot.year + "/"}
              />
            </div>
            <p className="md:px-24 lg:px-48 pb-20 flex justify-center">
              {robot.bio}
            </p>
          </section>

          // <section className="mb-20">
          //     <div className="flex justify-center"><section>
          //         <h2 className="inline">{robot.name}</h2> <h3 className="inline align-baseline">{robot.year}</h3>
          //     </section></div>
          //     <div className="flex justify-center"><MediaChooser type={robot.type} image={robot.image} video={robot.video}/></div>

          //     <p className="flex justify-center">{robot.bio}</p>
          // </section>
        );
      })}
    </div>
  );
};

export default RobotPage;
