import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

import './Team.style.css'

const TeamCard = (props) => {

    return (

        <Card className="teamCard">
            <Card.Title id='title'>
                {props.subteam.name}
            </Card.Title>
            <Card.Img id='image' src={props.subteam.image} alt={props.subteam.title}/> {/* i have no clue why just {props.image} doesnt work */}
            <Card.Body className="textContent">
                <Card.Text>
                    {props.subteam.description}
                </Card.Text>
            </Card.Body>
        </Card>

    )

}

export const TeamGrid = (props) => {

    return (

        <Container fluid>
            <Row>
                {props.subteams.map(subteam => (
                    <Col key={subteam.id} md={{ span: 8, offset: 2 }}>
                        <TeamCard subteam={subteam}/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}