import React from 'react';
import './header.style.css'

function generateRandomHeader(){
    let x = Math.floor(Math.random() * 3);
    let y;
    switch(x){
        case 0:
            y = "gray-header";
            break;
        case 1:
            y = "maroon-header";
            break;
        case 2:
            y = "black-header";
            break;
        default:
            y = "gray-header"
    }
    return y
}

export const Header = (props) => {
    return (
        <section className={generateRandomHeader()}>
            <h1><b>{props.title}</b></h1>
        </section>
    )
}