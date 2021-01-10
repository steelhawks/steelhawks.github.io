import React from 'react'
import { Container, Jumbotron, Row } from 'react-bootstrap'

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        window.PixleeAsyncInit()
    }

    render(){
        return (
            <Container fluid>
                <Jumbotron fluid>
                    <img src="/media/home_page.png"/>
                    <p>
                    The Steel Hawks (FRC 2601) focuses on empowering our diverse team to develop abilities through a collaborative learning environment.
                    We create opportunities to explore a myriad of fields to ignite and fuel our passions.
                    Our enthusiasm drives us to share our knowledge globally to inspire the next generation of innovators.
                    </p>
                </Jumbotron>
                <div id="pixlee_container"></div>
                <Row>
                    
                </Row>
            </Container>
        )
    }
}

export default HomePage