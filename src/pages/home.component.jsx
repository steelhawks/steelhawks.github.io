import React from 'react'
import { Jumbotron, Row, Col, Card, Button } from 'react-bootstrap'

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            missionStatement: 
            "The Steel Hawks (FRC 2601) focuses on empowering our diverse team to develop abilities through a collaborative learning environment. We create opportunities to explore a myriad of fields to ignite and fuel our passions. Our enthusiasm drives us to share our knowledge globally to inspire the next generation of innovators."
        }
    }

    componentDidMount(){
        window.PixleeAsyncInit()
    }

    render(){
        const { missionStatement } = this.state
        return (
            <section>
                <Jumbotron fluid style={{ backgroundColor: 'black', textAlign: 'center', borderLeft: '300px', borderRight: '300px' }}>
                    <img style={{width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%'}} src="/media/home_page.png"/>
                    <p style={{ color: 'white', paddingLeft: '50px', paddingRight: '50px' }}> 
                        {missionStatement}
                    </p>
                </Jumbotron>
                <div id="pixlee_container"></div>
                <Row>
                    <Col style={{paddingLeft: '0', paddingRight: '0'}}>
                        <Card>
                            <Card.Title style={{textAlign: 'center'}}>
                                SUPPORT THE TEAM
                            </Card.Title>
                            <Card.Img style={{maxWidth: '300px', maxHeight: '160px'}} src="/media/edcoLogo.png"/>
                            <Card.Body>
                                <Button variant="primary">DONATE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{paddingLeft: '0', paddingRight: '0'}}>
                        <Card>
                            <Card.Title>
                                GIVING BEAN FUNDRAISER
                            </Card.Title>
                            <Card.Body>
                                <Button variant="primary">BUY COFFEE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default HomePage