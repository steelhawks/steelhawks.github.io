import React from "react";
import { News2022 } from "./News2022";
import MediaChooser from "../../components/mediaChooser";

const HomePage = () => {
  return (
    <section>
      <MediaChooser
        type="carousel"
        images={["home1", "home2", "home3"]}
        location="home/"
      />
      <News2022 />

      <p className="pb-4 text-secondary">
        Thank you to our sponsors, parents, school communities, and volunteers
        who made this season possible!
      </p>
    </section>
  );
};

export default HomePage;
