import React from 'react'
import { Jumbotron } from 'react-bootstrap'

import './Introduction.style.css'

function generateIntro(content){

    if (content.length===1) {
        return <span>{content}</span>
    } else {
        return <span>{content[0]}<br/><br/>{generateIntro(content.slice(1))}</span>
    }

}


export const Introduction = (props) => {

    return (

        <Jumbotron className="introJumbotron">
            {
                generateIntro(props.content)
            }
        </Jumbotron>

    )

}