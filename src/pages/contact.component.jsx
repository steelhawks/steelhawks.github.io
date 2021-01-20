import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import { Header } from '../components/Header/header.component';

class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            map: ''
        }
    }

    render(){
        return (
            <section>
                <Header title="Contact Us"/>
                <Jumbotron fluid>
                    Thanks for visiting our site! If you have any questions, or would like to sponsor or mentor our team, contact us at <a href="mailto:townsendharrisrobotics@gmail.com">townsendharrisrobotics@gmail.com</a>!
                </Jumbotron>
                <Row>
                    <Col style={{textAlign: 'center'}} lg={6}>
                        <address>
                            <strong>TOWNSEND HARRIS HIGH SCHOOL</strong><br/>
                            149-11 Melbourne Avenue<br/>
                            Flushing, NY 11367<br/>
                            <strong>Phone:</strong> (718) 575 - 5580
                        </address>
                    </Col>
                    <Col style={{alignItems: 'center'}}>
                        <img src="https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=fTMdM-cl4Q8irO1AZjtTCZ_A-ixFi1x9EfLPrGgiIuo&c=40.73511729952239,-73.8212134713663&z=15&w=400&h=200"/>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default ContactPage