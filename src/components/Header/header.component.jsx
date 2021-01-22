import React from 'react';

import './Header.style.css'

function generateRandomHeader () {
    let x = Math.floor(Math.random() * 4);
    let y;
    switch(x){
        case 0:
            y = "grayOneHeader";
            break;
        case 1:
            y = "maroonHeader";
            break;
        case 2:
            y = "blackHeader";
            break;
        case 3:
            y = "grayTwoHeader";
            break;
        default:
            y = "blackHeader"
    }
    return y
}

export const Header = (props) => {

    return (

        <section className={generateRandomHeader() + ' headerPadding'}>
            <h1 className="headerText">{props.title}</h1>
        </section>

    )
}