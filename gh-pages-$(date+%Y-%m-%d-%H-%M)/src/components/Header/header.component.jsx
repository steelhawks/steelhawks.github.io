import React from 'react';

import './header.style.css'

export const Header = (props) => {
    return (

        <section className>
            <h1 id='header' className="headerText">{props.title}</h1>
        </section>

    )
}