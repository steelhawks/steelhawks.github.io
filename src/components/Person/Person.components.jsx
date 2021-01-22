import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

import './Person.style.css'

const PersonCard = (props) => {
    
    return (

        <Card className="personCard">
            <Card.Img variant="top" src={props.person.image}/>
            <Card.Body>
                <Card.Title>
                    {props.person.name}
                </Card.Title>
                <Card.Subtitle>
                    {props.person.title}
                </Card.Subtitle>
                <Card.Text className="personText">
                    {props.person.bio}
                </Card.Text>
            </Card.Body>
        </Card>

    )

}

export const PersonGrid = (props) => {

    return (

        <Container fluid>
            <Row>
                {props.people.map(member => (
                    <Col key={member.id} md={6}>
                        <PersonCard person={member}/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}