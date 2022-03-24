import React from 'react'

import { Header } from '../components/Header/header.component'
import { SUBTEAMS } from '../data/subteams'
import { TeamGrid } from '../components/Team/Team.components'

const SubteamsPage = () => {

    return (

        <section>
            <Header title="SUBTEAMS"/>
            <TeamGrid subteams={SUBTEAMS} />
        </section>

    )

}

export default SubteamsPage