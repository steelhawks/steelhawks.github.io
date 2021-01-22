import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import './Sponsor.style.css'

const SponsorCard = (props) => {

    return (

        <Card className="sponsorCard">
            <Card.Body>
                <Card.Title>
                        {props.sponsor.name}
                </Card.Title>
                <a href={props.sponsor.url}>
                    <Card.Img className="sponsorPhoto" variant="top" src={props.sponsor.logo}/>
                </a>
            </Card.Body>
        </Card>
        
    )

}

export const SponsorGrid = (props) => {

    return (
        
        <Container fluid>
            <Row className="row">
                {props.sponsors.map(sponsor => (
                    <Col key={sponsor.id} md={6} sm={10}>
                        <SponsorCard sponsor={sponsor}/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}