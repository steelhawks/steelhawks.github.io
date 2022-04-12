import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'

import './Person.style.css'

const jessieStyle = {
    color: 'aqua',
};

const deanslist = {
    fontSize: '0.75em',
};

const PersonCard = (props) => {
    
    function checkForJessie() {if(props.person.name === 'Jessie Li') {
        console.log('hi');
        props.person.name = <span title="NYC Regional 2022 Dean's List Finalist!" style={jessieStyle}><i>Jessie Li
            <br/><p1 style={deanslist}>DEAN'S LIST FINALIST!</p1></i></span> 
    }};

    return (

        <Card className="personCard">
            <Card.Img variant="top" id='image' src={props.person.image}/>
            <Card.Body>
                <Card.Title id='name'>
                    {props.person.name}
                    {checkForJessie()}
                </Card.Title>
                <Card.Subtitle>
                    {props.person.title}
                </Card.Subtitle>
                {/* <Card.Text className="personText">
                    {props.person.bio}
                </Card.Text> */}
            </Card.Body>
        </Card>

    )

}

export const PersonGrid = (props) => {

    return (

        <Container fluid>
            <Row className="row">
                {props.people.map(member => (
                    <Col key={member.id} md={6}>
                        <PersonCard person={member}/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}