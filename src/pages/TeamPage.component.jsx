import React from 'react'

import { Header } from '../components/Header/header.component'
import { SUBTEAMS } from '../data/team'
import { SubteamHeader, TeamGrid } from '../components/Team/Team.components'

const TeamPage = () => {

    const bio = [
        "The Steel Hawks robotics team, operating out of Townsend Harris High School in Flushing, NY, competes annually in the FIRST Robotics Competition (FRC) after diligently working for six weeks designing, building, and programming a robot to perform certain tasks pertaining to that year’s game. We take this robot to various competitions: the Hudson Valley and Long Island Regionals, as well as the Detroit FRC World Championship upon qualification. As a team, we raise funds by building strong relationships with corporate and engineering sponsors, as well as fundraising within our school through candy, coffee, and bake sales. We do this to ensure that our team has the necessary funds and resources to purchase materials for our robot as well as travel to each of our competitions."
    ]

    return (

        <section>
            <Header title="Team 2601"/>
            <SubteamHeader/>
            <TeamGrid subteams={SUBTEAMS} />
        </section>

    )

}

export default TeamPage