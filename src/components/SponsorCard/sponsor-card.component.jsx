import React from 'react'
import { Card } from 'react-bootstrap'

import './sponsor-card.style.css'

export const SponsorCard = (props) => {
    return (
        <Card className="sponsorCard">
            <a href={props.info[2][1]}>
                <Card.Img variant="top" src={props.info[1][1]}/>
            </a>
            <Card.Body>
                <Card.Title>
                    {props.info[0][1]}
                </Card.Title>
            </Card.Body>
        </Card>
    )
}