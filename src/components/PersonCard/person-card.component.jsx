import React from 'react'
import { Card } from 'react-bootstrap'

import './person-card.style.css'

export const PersonCard = (props) => {
    return (
        <Card className="person-card">
            <Card.Img variant="top" src={props.person[3][1]}/>
            <Card.Body>
                <Card.Title>
                    {props.person[0][1]}
                </Card.Title>
                <Card.Subtitle>
                    {props.person[1][1]}
                </Card.Subtitle>
                <Card.Text>
                    {props.person[2][1]}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}