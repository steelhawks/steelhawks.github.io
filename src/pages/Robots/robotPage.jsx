import React, { useState } from "react";
import { robotData } from "./robotData";
import RobotMedia from "./robotMedia";

const RobotPage = () => {
    return (
        <div>
            <h1 className="pageTitle">Robots</h1>
            { robotData.map((robot)=> {
                return (
                    <section className="">
                      <h2 className="text-2xl md:text-4xl mb-2 overflow-hidden text-center">
                        {robot.name} {robot.year}
                      </h2>
                      <div className="flex justify-center">
                        <RobotMedia type={robot.type} image={robot.image} video={robot.video}/>
                      </div>
                      <p className="w-1/2 flex justify-center">{robot.bio}</p>
                    </section>

                    // <section className="mb-20">
                    //     <div className="flex justify-center"><section>
                    //         <h2 className="inline">{robot.name}</h2> <h3 className="inline align-baseline">{robot.year}</h3>
                    //     </section></div>
                    //     <div className="flex justify-center"><RobotMedia type={robot.type} image={robot.image} video={robot.video}/></div>

                    //     <p className="flex justify-center">{robot.bio}</p>
                    // </section>
                )
            })}
        </div>
    )
}

export default RobotPage