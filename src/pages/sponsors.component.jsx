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
            <section>
                <Header title="Sponsors"/>
                <Jumbotron style={{marginTop: '30px'}}>
                        The Steel Hawks are a non-profit organization representing Townsend Harris High School. We are hard at work and getting ready to take off on our next journey! Our success stems from the support of our friends, family and community. We appreciate all donations which further our mission to create opportunities both within and beyond the STEM fields. Thank You!
                        <br/>
                        <br/>
                        We would would like to thank the following people, companies and organizations for their continuing support of our team and school.
                    </Jumbotron>
                <Container fluid>
                    <Row>
                        {sponsors.map(sponsor => (
                            <Col md={6} sm={10}>
                                <SponsorCard info={Object.entries(sponsor)}></SponsorCard>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        )
    }
}

export default SponsorPage