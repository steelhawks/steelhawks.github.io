import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../components/Header/Header.component';
import { Introduction } from '../components/IntroJumbotron/Introduction.component';

const PhoneIcon = () => (

    <React.Fragment>
        <i className="fas fa-phone fa-sm"/> (718) 575 - 5580
    </React.Fragment>

)

const EmailIcon = () => (

    <React.Fragment>
        <i className="fas fa-inbox fa-sm"/> <a href="mailto:townsendharrisrobotics@gmail.com">townsendharrisrobotics@gmail.com</a>
    </React.Fragment>

)

const TownsendHarrisMap = () => {

    const mapurl = "https://image.maps.ls.hereapi.com/mia/1.6/mapview?apiKey=fTMdM-cl4Q8irO1AZjtTCZ_A-ixFi1x9EfLPrGgiIuo&c=40.73511729952239,-73.8212134713663&z=15&w=380&h=190"

    return (
        <img alt="Townsend Harris Location on Map" style={{marginBottom: '25px'}} src={mapurl}/>
    )

}

const TownsendHarrisAddress = () => (

    <address>
        <strong>TOWNSEND HARRIS HIGH SCHOOL</strong><br/>
        149-11 Melbourne Avenue<br/>
        Flushing, NY 11367<br/>
        <PhoneIcon/><br/>
        <EmailIcon/>
    </address>
)

const ContactColumn = (props) => (

    <Col style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'}} lg={6}>
        {props.componentToRender}
    </Col>

)

const ContactPage = () => {

    const content = [
        'Thanks for visiting our site! If you have any questions, or would like to sponsor or mentor our team, contact us at our email listed below or give us a call!'
    ]

    return (

        <section>
            <Header title="Contact Us"/>
            <Introduction content={ content }/>
            <Container fluid>
                <Row>
                    <ContactColumn componentToRender={<TownsendHarrisAddress/>}/>
                    <ContactColumn componentToRender={<TownsendHarrisMap/>}/>
                </Row>
            </Container>
        </section>

    )

}

export default ContactPage