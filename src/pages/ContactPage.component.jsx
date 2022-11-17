import React from 'react'

import { Header } from '../components/Header/header.component'
import { ContactPage } from '../components/Contact/contact.component'

const contactPage = (props) => {
    return(
        <section>
            <Header title="Contact Us"/>
            <ContactPage/>
        </section>
    )
}

export default contactPage;