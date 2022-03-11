import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Headroom from 'react-headroom'

import { Link, NavLink } from 'react-router-dom'
import './Navbar2.style.css'


export const Navigation = (props) => {
    
    return (
        <Navbar className='navbar' expand="lg">
            <>
                <Navbar.Toggle id="mobileToggle" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Headroom pinStart={-1000}>
                    <Nav>
                    <Dropdown className='link' id='dropdownContainer'> {/*rework into custom dropdown component??*/}
                        <Dropdown.Toggle variant="secondary" className='link' id="dropdownButton">
                        OUR TEAM
                        </Dropdown.Toggle>
                        <Dropdown.Menu id='dropdownMenu'>
                            <DropdownItem className='dropdownElement' href='#/leadership'>LEADERSHIP</DropdownItem>
                            <DropdownItem className='dropdownElement' href='#/Mentors'>MENTORS</DropdownItem>
                            <DropdownItem className='dropdownElement' href='#/Team'>SUBTEAMS</DropdownItem>
                        </Dropdown.Menu>
                    </Dropdown>
                            <NavLink className='link' to='/Robots'>ROBOTS</NavLink>
                            <NavLink className='link' to='/Awards'>AWARDS</NavLink>
                            <Navbar.Brand>
                                <Link to={'/'}><img className="navLogo" src="/media/hawkAndText.svg" alt="Steel Hawks Logo"/>
                                </Link>
                            </Navbar.Brand>
                            <NavLink className='link' id='sponsors' to='/Sponsors'>SPONSORS</NavLink>
                            <NavLink className='link' to='/Outreach'>OUTREACH</NavLink>
                            <NavLink className='link' to='/Contact'>CONTACT US</NavLink>
                    </Nav>
                    </Headroom>
                </Navbar.Collapse>
            </>
        </Navbar>
    )
}