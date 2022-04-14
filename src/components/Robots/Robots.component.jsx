import React from 'react'
import {Card, Container, Row, Col} from 'react-bootstrap'
import './Robots.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <FontAwesomeIcon className="dirArrow" icon="fa-solid fa-angle-right" color='#000' size='2x'/>
    </div>
    ); 
}
  
function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <FontAwesomeIcon className="dirArrow" icon="fa-solid fa-angle-left" color='#000' size='2x'/>
    </div>
    ); 
}

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'true',
    autoplay: 'true',
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  };

  /* variableWidth is good for top big slideshow of old robots*/

const RobotCard = (props) => {

    return (

        <Card className="robotCard">
            <Container fluid>
                <Row>
                    <Col>
                        {
                            props.info[5][1] === "vid" ? 
                            <iframe style={{minWidth: '300px', maxWidth: '100%', minHeight: '300px', maxHeight: '100%'}} width="100%" height="100%" src={props.info[2][1]} frameBorder='0' allow='autoplay;encrypted-media' allowFullScreen title="video"></iframe>                        
                            : props.info[5][1] === "slide" ? 
                            <div className="container">
                                <Slider className="robot2022" {...settings}> 
                                <div>
                                    <img src="/media/2022robot/robot1.jpg"/>
                                </div>
                                <div>
                                    <img src="/media/2022robot/robot2.jpg"/>
                                </div>
                                <div>
                                    <img src="/media/2022robot/robot3.jpg"/>
                                </div>
                                </Slider>
                            </div>
                            :<Card.Img variant="top" style={{minWidth: '300px', maxWidth: '100%'}} src={props.info[2][1]}/> 
                        }
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className="Year">{props.info[0][1]}</Card.Title>
                            <Card.Subtitle className="gameName">{props.info[1][1]}</Card.Subtitle>
                            <Card.Subtitle className="robotName"><br/>{props.info[4][1]} </Card.Subtitle>
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