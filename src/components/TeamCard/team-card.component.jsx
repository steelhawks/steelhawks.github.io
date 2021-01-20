import React from 'react'
import { Card } from 'react-bootstrap'

import './team-card.style.css'

export const TeamCard = (props) => {
    return (
        <Card className="teamCard">
            <Card.Title>
                {props.title}
            </Card.Title>
            <Card.Body className="textContent">
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}