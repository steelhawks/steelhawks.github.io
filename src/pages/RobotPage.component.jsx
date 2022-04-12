import React from 'react'

import { Header } from '../components/Header/header.component'

import { RobotGrid, Slideshows } from '../components/Robots/Robots.component'
import { ROBOTS } from '../data/robots'

const slideImages = [
    {
        url: '/media/2022robot/robot1f.jpg',
        caption: 'test1'
    },
    {
        url: '/media/2022robot/robot2f.jpg',
        caption: 'test2'
    },
    {
        url: '/media/2022robot/robot3f.jpg',
        caption: 'test3'
    },
]

const RobotsPage = () => {

    return (

        <section>
            <Header title="Our Robots"/>
            <Slideshows/>
            <RobotGrid robots={ ROBOTS }/>
        </section>

    )

}

export default RobotsPage