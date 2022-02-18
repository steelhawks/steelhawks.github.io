import React from 'react'
import { Row, Col, Card, Jumbotron } from 'react-bootstrap'
import { WebsiteIcon } from '../Website/Website.components'

import './Home.style.css'

export const HomeBanner = () => {


    return (
            <section class="newsheaderbg">
            <img className="homeImage" alt="Steel Hawks Team" src="/media/home_page.png"/>
            
            <div id="twentytwo">
                <h1 id="a2022">2022</h1>
                <div id = "imgDesc">
                    <p1 id="twentytwoText">Our 2022 FRC Robot is in the works! Stay tuned for our reveal video!</p1>
                    <img id='teaserImage' src="/media/test.jpg" alt="Robot"></img>
                </div>  
            </div></section>
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