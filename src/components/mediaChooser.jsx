import React from "react";
import Carousel from "../pages/Robots/carousel";

const MediaChooser = (props) => {
  if (props.type === "img") {
    return (
      <picture>
        <source
          srcSet={"media/" + props.location + "/avif/" + props.images + ".avif"}
          type="image/avif"
        />
        <source
          srcSet={"media/" + props.location + "/webp/" + props.images + ".webp"}
          type="image/webp"
        />
        <source
          srcSet={"media/" + props.location + "/jpg/" + props.images + ".jpg"}
          type="image/jpg"
        />
        <img className="rounded-lg px-2" alt="" />
      </picture>
    );
  } else if (props.type === "vid")
    return (
      <iframe
        width="500"
        height="281.25"
        src={props.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  else if (props.type === "carousel") {
    return <Carousel images={props.images} location={props.location} />;
  }
};

export default MediaChooser;
