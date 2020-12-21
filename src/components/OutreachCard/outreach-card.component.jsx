import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import './outreach-card.style.css'

export const OutreachCard = (props) => {
    return (
        <Card>
            <Container fluid>
                <Row>
                    <Col>
                        <Card.Img variant="top" src={props.info[2][1]}/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{props.info[1][1]}</Card.Title>
                            <Card.Text>
                                {props.info[3][1]}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}
