import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { Header } from '../components/Header/header.component';

class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Container fluid>
                <Header title="Contact Us"/>
                <Jumbotron fluid>
                Thanks for visiting our site! If you have any questions, or would like to sponsor or mentor our team, contact us at <a href="mailto:townsendharrisrobotics@gmail.com">townsendharrisrobotics@gmail.com</a>!
                </Jumbotron>
            </Container>
        )
    }
}

export default ContactPage