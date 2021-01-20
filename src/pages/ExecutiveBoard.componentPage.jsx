import React from 'react'

import { Header } from '../components/Header/header.component';

import { PersonGrid } from '../components/Person/Person.components';
import { EXECUTIVEBOARD } from '../data/people'

const ExecutiveBoardPage = () => {

    return (

        <section>
            <Header title="Executive Board"/>
            <PersonGrid people={ EXECUTIVEBOARD }/>
        </section>

    )

}

export default ExecutiveBoardPage;