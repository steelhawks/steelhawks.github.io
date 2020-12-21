import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Header } from '../components/Header/header.component'
import { OutreachCard } from '../components/OutreachCard/outreach-card.component'
import { OUTREACH } from '../data/outreach'

class OutreachPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            outreach: OUTREACH
        }
    }

    render(){
        const { outreach } = this.state
        return (
            <Container fluid>
                <Header title="Outreach"></Header>
                <Container fluid>
                    <Row>
                        {outreach.map(event => (
                            <Col md={12}>
                                <OutreachCard info={Object.entries(event)}/>   
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default OutreachPage