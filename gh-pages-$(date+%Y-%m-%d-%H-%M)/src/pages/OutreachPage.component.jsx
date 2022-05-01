import React from 'react'

import { Header } from '../components/Header/header.component'

import { OutreachGrid } from '../components/Outreach/Outreach.components'
import { OUTREACH } from '../data/outreach'

const OutreachPage = (props) => {

    return (

        <section>
            <Header title="Outreach"></Header>
            <OutreachGrid events={ OUTREACH } />
        </section>

    )

}

export default OutreachPage