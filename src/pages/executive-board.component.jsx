import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from '../components/Header/header.component';
import { PersonCard } from '../components/PersonCard/person-card.component';
import { EXECUTIVEBOARD } from '../data/people'

class ExecutiveBoardPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: EXECUTIVEBOARD
        }
    }

    render(){
        const { board } = this.state
        return (
            <Container fluid>
                <Header title="Executive Board"/>
                <Container fluid>
                    <Row>
                        {board.map(member=> (
                            <Col md={6}>
                                <PersonCard person={Object.entries(member)} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default ExecutiveBoardPage