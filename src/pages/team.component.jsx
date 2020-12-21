import React from 'react'
import { Header } from '../components/Header/header.component'
import { Row, Container, Col, Jumbotron } from 'react-bootstrap'

import { SUBTEAMS } from '../data/team'
import { TeamTab } from '../components/TeamTab/team-tab.component'

class TeamPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            subteams: SUBTEAMS
        }
    }

    render(){
        const { subteams } = this.state
        return (
            <Container fluid>
                <Header title="Team 2601"></Header>
                <Jumbotron>
                The Steel Hawks robotics team, operating out of Townsend Harris High School in Flushing, NY, competes annually in the FIRST Robotics Competition (FRC) after diligently working for six weeks designing, building, and programming a robot to perform certain tasks pertaining to that year’s game. We take this robot to various competitions: the Hudson Valley and Long Island Regionals, as well as the Detroit FRC World Championship upon qualification. As a team, we raise funds by building strong relationships with corporate and engineering sponsors, as well as fundraising within our school through candy, coffee, and bake sales. We do this to ensure that our team has the necessary funds and resources to purchase materials for our robot as well as travel to each of our competitions.
                </Jumbotron>
                <h3>Subteams</h3>
                <Container fluid>
                    <Row>
                        {subteams.map(subteam => (
                            <Col md={{ span: 8, offset: 2 }}>
                                <TeamTab team={Object.entries(subteam)}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default TeamPage