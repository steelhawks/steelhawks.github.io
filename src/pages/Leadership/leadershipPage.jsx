import React from "react";
import { executiveBoard } from "./leadershipData";

const LeadershipPage = () => {
  return (
    <div>
      <h1 className="pageTitle p-0">Leadership</h1>
      <h1 className="pageTitle text-2xl md:text-5xl m-0 mb-4">
        Executive Board
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 m-4">
        {executiveBoard.map((exec) => {
          return (
            <div className="mb-20 px-4">
              <h2 className="overflow-hidden">{exec.name}</h2>
              <h3 className="text-center text-md">{exec.title}</h3>
              <div className="self-baseline flex justify-center">
                <picture>
                  <source
                    srcSet={
                      "/media/leadership/executiveboard/avif/" +
                      exec.fileName +
                      ".avif"
                    }
                    type="image/avif"
                  />
                  <source
                    srcSet={
                      "/media/leadership/executiveboard/webp/" +
                      exec.fileName +
                      ".webp"
                    }
                    type="image/webp"
                  />
                  <source
                    srcSet={
                      "/media/leadership/executiveboard/jpg/" +
                      exec.fileName +
                      ".jpg"
                    }
                    type="image/jpg"
                  />
                  <img className="rounded-md" alt={exec.name} />
                </picture>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default LeadershipPage;
