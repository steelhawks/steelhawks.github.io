import React from 'react'

import { Col, Container, Row, Tab, Tabs, Card } from 'react-bootstrap'

import './Team.style.css'

const TeamCard = (props) => {

    return (

        <Card className="teamCard">
            <Card.Title id='title'>
                {props.title}
            </Card.Title>
            <img id='image' src={"/media/subteams/" + props.title + ".jpg"} alt={props.title}></img>
            <Card.Body className="textContent">
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>

    )

}

const TeamTabs = (props) => {

    return (

            <><TeamCard title={props.subteam.name} text={props.subteam.description}></TeamCard></>
        //     <Tab eventKey="1" title="Information">
        //     <TeamCard title={props.subteam.name} text={props.subteam.description} />
        // </Tab><Tab eventKey="2" title="Members">
        //         <TeamCard title="Members" text={props.subteam.members} />
        //     </Tab>
        

    )

}

export const TeamGrid = (props) => {

    return (

        <Container fluid>
            <Row>
                {props.subteams.map(subteam => (
                    <Col key={subteam.id} md={{ span: 8, offset: 2 }}>
                        <TeamTabs subteam={subteam}/>
                    </Col>
                ))}
            </Row>
        </Container>

    )

}