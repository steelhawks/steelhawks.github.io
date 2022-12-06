import React from "react";

const RobotMedia = (props) => {
    if(props.type === "img")
        return <img className="rounded-lg py-2" alt="" src={props.image}/>
    else if(props.type === "vid")
        return (<iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
}   

export default RobotMedia