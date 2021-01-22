import React from 'react'

import './Website.style.css'

export const WebsiteIcon = (props) => {

    return (

        <a href ={props.linkTo} target="_blank" rel="noreferrer">
            <i className={props.iconClass} />
        </a>

    )

}