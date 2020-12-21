import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const RobotCard = (props) => {
    return (
        <Card>
            <Container fluid>
                <Row>
                    <Col>
                        {
                            props.info[5][1] == "vid" ? 
                            <iframe src={props.info[2][1]} frameBorder='0' allow='autoplay;encrypted-media' allowFullScreen title="video"></iframe> :                         
                            <Card.Img variant="top" src={props.info[2][1]}/>
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
