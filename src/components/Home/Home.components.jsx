import React from 'react'
import { Row, Col, Card, Jumbotron } from 'react-bootstrap'
import { WebsiteIcon } from '../Website/Website.components'

import './Home.style.css'

export const HomeBanner = () => {


    return (
            <section class="newsheaderbg">
            <img className="homeImage" alt="Steel Hawks Team" src="/media/teampicture.jpg"/>
            
            <div className="season2022">
                <h1 id="TWENTYTWENTYTWO">2022</h1>
                {/* <img id="TWENTYTWENTYTWO" alt="2022" src="/media/2022.png"></img> */}
                <div id = "body2022">
                    <img id='teaserImage' src="/media/robotTeaser.png" alt="Robot Teaser"></img>
                    <p1 id="twentytwoText">Our 2022 FRC Robot <br></br> is in the works!<br></br>Stay tuned for our reveal video!</p1>
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