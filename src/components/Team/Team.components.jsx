import React from 'react'

import { Col, Container, Row, Tab, Tabs, Card } from 'react-bootstrap'

import './Team.style.css'

export const SubteamHeader = () => (

    <h3 className="subteamHeader">Subteams</h3>

)

const TeamCard = (props) => {

    return (

        <Card className="teamCard">
            <Card.Title>
                {props.title}
            </Card.Title>
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

        <Tabs defaultActiveKey="1" className="teamTab">
            <Tab eventKey="1" title="Information">
                <TeamCard title={props.subteam.name} text={props.subteam.description}/>
            </Tab>
            <Tab eventKey="2" title="Members">
                <TeamCard title="Members" text={props.subteam.members}/>
            </Tab>
        </Tabs>

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