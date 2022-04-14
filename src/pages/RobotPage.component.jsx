import React from 'react'

import { Header } from '../components/Header/header.component'

import { RobotGrid, Slideshows } from '../components/Robots/Robots.component'
import { ROBOTS } from '../data/robots'

const RobotsPage = () => {

    return (

        <section>
            <Header title="Our Robots"/>
            <RobotGrid robots={ ROBOTS }/>
        </section>

    )

}

export default RobotsPage