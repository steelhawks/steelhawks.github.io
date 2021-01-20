import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import './outreach.style.css'

const OutreachCard = (props) => {

    return (

        <Card className="card">
            <Container fluid>
                <Row>
                    <Col>
                        <Card.Img className="cardImage" variant="top" src={props.info.img}/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className="cardTitle">{props.info.smallFocus}</Card.Title>
                            <Card.Text className="cardContent">
                                {props.info.description1}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>

    )

}

export const OutreachGrid = (props) => {
    
    return (
        <Container fluid>
            <Row>
                {props.events.map(event => (
                    <Col md={12}>
                        <OutreachCard info={event}/>   
                    </Col>
                ))}
            </Row>
        </Container>
    )

}
