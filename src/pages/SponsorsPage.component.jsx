import React from 'react'

import { Header } from '../components/Header/header.component'
import { Introduction } from '../components/IntroJumbotron/Introduction.component'
import { SponsorGrid } from '../components/SponsorCard/Sponsor.components'
import { SPONSORS } from '../data/sponsors'

const SponsorPage = () => {

    const content = [
        'The Steel Hawks are a non-profit organization representing Townsend Harris High School. We are hard at work and getting ready to take off on our next journey! Our success stems from the support of our friends, family and community. We appreciate all donations which further our mission to create opportunities both within and beyond the STEM fields. Thank You!', 
        'We would would like to thank the following people, companies and organizations for their continuing support of our team and school.'
    ]

    return (

        <section>
            <Header title="Sponsors"/>
            <Introduction content={content} />
            <SponsorGrid sponsors={SPONSORS} />
        </section>

    )

}

export default SponsorPage