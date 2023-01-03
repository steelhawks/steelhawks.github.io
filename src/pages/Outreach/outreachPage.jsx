import React from "react";
import { outreachData } from "./outreachData";
import MediaChooser from "../../components/mediaChooser";

const OutreachPage = () => {
  return (
    <div>
      <h1 className="pageTitle">Outreach</h1>
      {outreachData.map((outreach) => {
        return (
          <section>
            <h2>{outreach.name}</h2>
            <div className="flex justify-center">
              <MediaChooser
                type={outreach.type}
                images={outreach.fileNames}
                video={outreach.video}
                location={"outreach/" + outreach.fileLocation}
              />
            </div>
            <p className="md:px-24 lg:px-48 pb-20">{outreach.description}</p>
          </section>
        );
      })}
    </div>
  );
};

export default OutreachPage;
