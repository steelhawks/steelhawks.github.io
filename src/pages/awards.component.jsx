import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Award } from '../components/Award/award.component'
import { Header } from '../components/Header/header.component'
import AWARDS from '../data/awards'

class AwardsPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            awards: AWARDS
        }
    }

    render(){
        const { awards } = this.state
        return (
            <Container fluid>
                <Header title="Awards"/>
                <Container fluid>
                    <Row>
                        {awards.map(award => (
                            <Col md={3} sm={4}>
                                <Award info={Object.entries(award)}/>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </Container>
        )
    }
}

export default AwardsPage