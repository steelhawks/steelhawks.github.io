import React from 'react'
import { Card } from 'react-bootstrap'

export const TeamCard = (props) => {
    return (
        <Card>
            <Card.Title>
                {props.title}
            </Card.Title>
            <Card.Body>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}