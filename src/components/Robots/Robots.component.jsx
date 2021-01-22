import React from 'react'

import {Card, Container, Row, Col} from 'react-bootstrap'

import './Robots.style.css'

const RobotCard = (props) => {

    return (

        <Card className="robotCard">
            <Container fluid>
                <Row>
                    <Col>
                        {
                            props.info[5][1] === "vid" ? 
                            <iframe style={{minWidth: '300px', maxWidth: '100%', minHeight: '300px', maxHeight: '100%'}} width="100%" height="100%" src={props.info[2][1]} frameBorder='0' allow='autoplay;encrypted-media' allowFullScreen title="video"></iframe> :                         
                            <Card.Img variant="top" style={{minWidth: '300px', maxWidth: '100%'}} src={props.info[2][1]}/>
                        }
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{props.info[0][1]}</Card.Title>
                            <Card.Subtitle>{props.info[1][1]}</Card.Subtitle>
                            <Card.Text className="robotText">
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
                    <Col key={robot.id} md={12}>
                        <RobotCard info={Object.entries(robot)}/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}