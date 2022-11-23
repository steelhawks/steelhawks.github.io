import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { WebsiteIcon } from '../Website/Website.components'
import { News } from './News/News.component'

import './Home.style.css'

export const HomeBanner = () => {
    return (
            <section>
                <img className="homeImage" alt="Home" src="/media/homeImgLow.jpg" srcset='media/homeImgHigh.jpg'/>
                <News/>
            </section>
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