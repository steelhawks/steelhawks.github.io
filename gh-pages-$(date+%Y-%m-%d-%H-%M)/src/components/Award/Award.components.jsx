import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './award.style.css'

const Award = (props) => {

    return (

        <div className="banner">
            <img alt="" src="/media/first_icon.svg"/>
            <div className="banner-award-name">
                <span>{ props.award.name }</span>
            </div>
            <div className="banner-award-event">
                <span>{ props.award.year }  { props.award.event }</span>
            </div>
        </div>

    )
    
}

export const AwardGrid = (props) => {

    return (

        <Container fluid>
            <Row className="row">
                {props.awards.map(award => (
                    <Col key={ award.id } className="awardColumn" md={ 3 } sm={ 4 }>
                        <Award award={ award }/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}