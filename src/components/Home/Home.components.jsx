import React from 'react'
import { Row, Col, Card, Jumbotron } from 'react-bootstrap'
import { WebsiteIcon } from '../Website/Website.components'

import './Home.style.css'

export const HomeBanner = () => {

    const missionStatement = "The Steel Hawks (FRC 2601) focuses on empowering our diverse team to develop abilities through a collaborative learning environment. We create opportunities to explore a myriad of fields to ignite and fuel our passions. Our enthusiasm drives us to share our knowledge globally to inspire the next generation of innovators."

    return (

        <Jumbotron fluid className="homeJumbotron">
            <img className="homeImage" alt="Steel Hawks Banner" src="/media/home_page.png"/>
            <p className="homeMissionStatement">
                {missionStatement}
            </p>
        </Jumbotron>

    )

}

const HomeColumn = (props) => {

    return (

        <Col className="homeColumn">
            <Card>
                <Card.Title className="homeTitle">
                    <h2 className="homeCardTitle">{props.card.title}</h2>
                </Card.Title>
                <Card.Body className="homeBody">
                    <WebsiteIcon linkTo={props.card.url} iconClass={'homeIcon ' + props.card.logo}/>
                </Card.Body>
            </Card>
        </Col>

    )

}

export const HomeGrid = (props) => {

    return (

        <Row>
            {props.cards.map(card => (
                <HomeColumn key={card.id} card={card}/>
            ))}
        </Row>

    )

}