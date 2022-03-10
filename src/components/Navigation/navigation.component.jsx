import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Headroom from 'react-headroom'

import { Link, NavLink } from 'react-router-dom'
import './Navbar.style.css'


export const Navigation = (props) => {
    
    return (
        <Navbar className='navbar' expand="lg" >
            <>
                <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Headroom
                        pinStart={-1000}
                    >
                    <Nav>
                    <Dropdown id='Dropdown'>
                        <Dropdown.Toggle variant="success" id="dropdownToggle">
                        OUR TEAM
                        </Dropdown.Toggle>
                        <Dropdown.Menu id='ddmenu'>
                            <DropdownItem className='dropdownElement' href='#/leadership'>LEADERSHIP</DropdownItem>
                            <DropdownItem className='dropdownElement' href='#/Mentors'>MENTORS</DropdownItem>
                            <DropdownItem className='dropdownElement' href='#/Team'>SUBTEAMS</DropdownItem>
                        </Dropdown.Menu>
                    </Dropdown>
                            <NavLink className='nav' to='/Robots'>ROBOTS</NavLink>
                            <NavLink className='nav' to='/Awards'>AWARDS</NavLink>
                            <Navbar.Brand>
                                <Link id='steel' to={'/'}><img className="navLogo" src="/media/hawkAndText.svg" alt="Steel Hawks Logo"/>
                                </Link>
                            </Navbar.Brand>
                            <NavLink className='nav' id='sponsors' to='/Sponsors'>SPONSORS</NavLink>
                            <NavLink className='nav' to='/Outreach'>OUTREACH</NavLink>
                            <NavLink className='nav' to='/Contact'>CONTACT US</NavLink>
                    </Nav>
                    </Headroom>
                </Navbar.Collapse>
            </>
        </Navbar>
    )
}