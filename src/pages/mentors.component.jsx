import React from 'react'

import {MENTORS} from '../data/people'
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../components/Header/header.component';
import { PersonCard } from '../components/PersonCard/person-card.component';

class MentorPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mentors: MENTORS
        };
    }

    render(){
        const { mentors } = this.state;
        return (
            <Container fluid>
                <Header title="Mentors"/>
                <Container fluid>
                    <Row>
                        {mentors.map(mentor=> (
                            <Col md={6}>
                                <PersonCard person={Object.entries(mentor)} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default MentorPage