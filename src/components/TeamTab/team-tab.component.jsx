import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { TeamCard } from '../TeamCard/team-card.component'

import './team-tab.style.css'

export const TeamTab = (props) => {
    return (
        <Tabs defaultActiveKey="1" className="teamTab">
            <Tab eventKey="1" title="Information">
                <TeamCard title={props.team[0][1]} text={props.team[1][1]}/>
            </Tab>
            <Tab eventKey="2" title="Members">
                <TeamCard title="Members" text={props.team[2][1]}/>
            </Tab>
        </Tabs>
    )
}