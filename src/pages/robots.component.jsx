import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Header } from '../components/Header/header.component'
import { RobotCard } from '../components/RobotCard/robot-card.component'
import { ROBOTS } from '../data/robots'

class RobotsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            robots: ROBOTS
        }
    }

    render(){
        const { robots } = this.state
        return (
            <Container fluid>
                <Header title="Our Robots"></Header>
                <Container fluid>
                    <Row>
                        {robots.map(robot => (
                            <Col md={12}>
                                <RobotCard info={Object.entries(robot)}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default RobotsPage