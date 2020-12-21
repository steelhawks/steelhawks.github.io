import React from 'react';
import './header.style.css'

export const Header = (props) => {
    return (
        <section className="header">
            <h1><b>{props.title}</b></h1>
        </section>
    )
}