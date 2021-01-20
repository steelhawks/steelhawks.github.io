import React from 'react'

import {Card, Container, Row, Col} from 'react-bootstrap'

import './robot-card.style.css'

const RobotCard = (props) => {

    return (

        <Card className="robotCard">
            <Container fluid>
                <Row>
                    <Col>
                        {
                            props.info[5][1] === "vid" ? 
                            <iframe style={{width: '640px', height: '360px'}} src={props.info[2][1]} frameBorder='0' allow='autoplay;encrypted-media' allowFullScreen title="video"></iframe> :                         
                            <Card.Img variant="top" style={{maxWidth: '640px'}} src={props.info[2][1]}/>
                        }
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{props.info[0][1]}</Card.Title>
                            <Card.Subtitle>{props.info[1][1]}</Card.Subtitle>
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

export const RobotGrid = (props) => {

    return (

        <Container fluid>
            <Row>
                {props.robots.map(robot => (
                    <Col md={12}>
                        <RobotCard info={Object.entries(robot)}/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}