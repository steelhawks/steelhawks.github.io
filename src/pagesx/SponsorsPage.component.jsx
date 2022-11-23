import React from 'react'

import { Header } from '../components/Header/header.component'
import { SponsorGrid } from '../components/SponsorCard/Sponsor.components'
import { SPONSORS } from '../data/sponsors'

const SponsorPage = () => {

    return (

        <section>
            <Header title="Sponsors"/>
            <h3>Thank you sponsors! We are eternally grateful for your support!</h3>
            <SponsorGrid sponsors={SPONSORS} />
            <p>Interested in sponsoring? Contact us at <a href="mailto:townsendharrisrobotics@gmail.com">townsendharrisrobotics@gmail.com</a>.</p>
        </section>

    )

}

export default SponsorPage