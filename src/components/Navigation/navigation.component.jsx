import React from 'react';
import { NavDropdown } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Headroom from 'react-headroom'

import { Link, NavLink } from 'react-router-dom'
import './Navbar.style.css'

var x = ''
// eslint-disable-next-line no-restricted-globals
if(screen.width < 992) {
    x = 'true'
} else {x = ''}


export const Navigation = (props) => {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg"> 
            <>
                <Navbar.Toggle id="mobileToggle" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Headroom disable={x} pinStart={-1000}>
                    <Nav>
                        <NavDropdown title="OUR TEAM" className="link" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/leadership">Leadership</NavDropdown.Item>
                            <NavDropdown.Item href="#/mentors">Mentors</NavDropdown.Item>
                            <NavDropdown.Item href="#/subteams">Subteams</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink className='link' to='/robots'>ROBOTS</NavLink>
                        <NavLink className='link' to='/awards'>AWARDS</NavLink>
                        <Navbar.Brand className="link" href="/"><img alt='' id="navHawk" src="media/2601Hawk.svg"/></Navbar.Brand>
                        <NavLink className='link' id='sponsors' to='/sponsors'>SPONSORS</NavLink>
                        <NavLink className='link' to='/outreach'>OUTREACH</NavLink>
                        <NavLink className='link' to='/contact'>CONTACT US</NavLink>
                    </Nav>
                    </Headroom>
                </Navbar.Collapse>
            </>
        </Navbar>
    )
}