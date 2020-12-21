import React from 'react'
import { Container } from 'react-bootstrap'

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
                <div id="pixlee_container"></div>
            </Container>
        )
    }
}

export default HomePage