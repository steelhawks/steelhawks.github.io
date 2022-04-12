import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import './Robots.style.css'

import Slider from "react-slick";


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

export const Slideshows = (props) => {
    return (
        <div className="container">
        <Slider {...settings}>
          <div>
              <img src="/media/2022robot/robot1f.jpg"/>
          </div>
          <div>
              <img src="/media/2022robot/robot2f.jpg"/>
          </div>
          <div>
              <img src="/media/2022robot/robot3f.jpg"/>
          </div>
        </Slider>
    </div>   
    )
}

const RobotCard = (props) => {

    function check2022() {if(props.info[0][1] === '2022') {
        props.info[2][1] = Slideshows;
    }}

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
                            <Card.Title className="Year">{props.info[0][1]}</Card.Title>
                            <Card.Subtitle className="gameName">{props.info[1][1]}</Card.Subtitle>
                            <Card.Subtitle className="robotName"><br/>{props.info[4][1]} </Card.Subtitle>
                            <Card.Text className="robotText">
                                {props.info[3][1]}
                                {check2022()}
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