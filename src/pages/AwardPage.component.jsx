import React from 'react'

import { AwardGrid } from '../components/Award/Award.components'
import { Header } from '../components/Header/header.component'

import AWARDS from '../data/awards'

const AwardsPage = () => {

    return (

        <section>
            <Header title="Awards"/>
            <AwardGrid awards={AWARDS}/>
        </section>

    )

}

export default AwardsPage