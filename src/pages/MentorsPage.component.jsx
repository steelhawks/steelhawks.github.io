import React from 'react'

import { MENTORS } from '../data/people'

import { Header } from '../components/Header/Header.component';
import { PersonGrid } from '../components/Person/Person.components';

const MentorPage = () => {

    return (

        <section>
            <Header title="Mentors"/>
            <PersonGrid people={ MENTORS }/>
        </section> 

    )

}

export default MentorPage