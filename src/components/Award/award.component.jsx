import React from 'react'

import './award.style.css'

export const Award = (props) => {
    return (
        <div className="banner">
            <img src="/media/first_icon.svg"/>
            <div className="banner-award-name">
                <span>{props.info[0][1]}</span>
            </div>
            <div className="banner-award-event">
                <span>{props.info[1][1]}  { props.info[2][1] }</span>
            </div>
        </div>
    )
}