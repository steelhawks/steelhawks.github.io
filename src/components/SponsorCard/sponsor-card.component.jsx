import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import './sponsor-card.style.css'

export const SponsorCard = (props) => {
    return (
        <Card className="sponsorCard">
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card.Title>
                                    {props.info[0][1]}
                            </Card.Title>
                            <a href={props.info[2][1]}>
                                <Card.Img className="sponsorPhoto" variant="top" src={props.info[1][1]}/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}