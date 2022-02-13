import React from 'react'
import { Row, Col, Card, Jumbotron } from 'react-bootstrap'
import { WebsiteIcon } from '../Website/Website.components'

import './Home.style.css'

export const HomeBanner = () => {

    const missionStatement = "insert something here."

    return (
            <section class="newsheaderbg"><h3 id='newsheader'>OUR 2022 ROBOT IS IN THE WORKS!</h3>
            <img className="homeImage" alt="Steel Hawks Banner" src="/media/teampicResized.jpg"/>
            <p id="homeMissionStatement">
                {missionStatement}
            </p></section>
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