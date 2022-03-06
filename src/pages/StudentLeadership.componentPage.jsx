import React from 'react'

import { Header } from '../components/Header/header.component';

import { PersonGrid } from '../components/Person/Person.components';
import { EXECUTIVEBOARD, MECHLEADS, PROGRAMMINGLEADS, CADLEADS, SCOUTINGLEADS, ELECTRICALLEADS, MEDIALEADS } from '../data/studentleadership.js'

const StudentLeadershipPage = () => {

    return (
        
        <section>
            <Header title="Executive Board"/>
            <PersonGrid people={ EXECUTIVEBOARD }/>
            <Header title="Subteam Leads"/>
            <PersonGrid people={ MECHLEADS }/>
            <h2 id='h2'>Programming Leads</h2>
            <PersonGrid people={ PROGRAMMINGLEADS }/>
            <h2 id='h2'>CAD Leads</h2>
            <PersonGrid people={ CADLEADS }/>
            <h2 id='h2'>Scouting Leads</h2>
            <PersonGrid people={ SCOUTINGLEADS }/>
            <h2 id='h2'>Electrical Leads</h2>
            <PersonGrid people={ ELECTRICALLEADS }/>
            <h2 id='h2'>Media Lead</h2>
            <PersonGrid people={ MEDIALEADS }/>
        </section>

    )

}

export default StudentLeadershipPage;