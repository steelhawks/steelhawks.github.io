import React from 'react'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import { Header } from '../components/Header/header.component'
import { SponsorCard } from '../components/SponsorCard/sponsor-card.component'
import { SPONSORS } from '../data/sponsors'

class SponsorPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sponsors: SPONSORS
        }
    }

        render(){
            const { sponsors } = this.state
            return (
                <Container fluid>
                    <Header title="Sponsors"/>
                    <Container fluid>
                        <Jumbotron fluid>
                            The Steel Hawks would like to thank the following people, companies and organizations for their continuing support of our team and school.
                        </Jumbotron>
                        <Row>
                            {sponsors.map(sponsor => (
                                <Col md={6} sm={10}>
                                    <SponsorCard info={Object.entries(sponsor)}></SponsorCard>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Container>
            )
        }
}

export default SponsorPage