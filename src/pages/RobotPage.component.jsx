import React from 'react'

import { Header } from '../components/Header/header.component'

import { RobotGrid } from '../components/RobotCard/Robots.component'
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