import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Headroom from 'react-headroom'

import { Link, NavLink } from 'react-router-dom'
import './Navbar.style.css'

export const Navigation = (props) => {
    return (
        <Navbar className='navbar'>
            <Headroom
                pinStart={-1000}
            >
            <Nav>
            <Dropdown id='Dropdown'>
                <Dropdown.Toggle variant="success" id="Dropdown">
                OUR TEAM
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <DropdownItem className='dropdownElement' href='#/ExecutiveBoard'>EXECUTIVE BOARD</DropdownItem>
                    <DropdownItem className='dropdownElement' href='#/Mentors'>MENTORS</DropdownItem>
                    <DropdownItem className='dropdownElement' href='#/Team'>SUBTEAMS</DropdownItem>
                </Dropdown.Menu>
            </Dropdown>
                    <NavLink className='nav' to='/Robots'>ROBOTS</NavLink>
                    <NavLink className='nav' to='/Awards'>AWARDS</NavLink>
                    <Navbar.Brand><Link id='steel' to={'/'}><img className="navLogo" src="/media/whitehack.png" alt="Steel Hawks Logo"/><p1 id='steelhawkstext'>STEEL HAWKS</p1></Link></Navbar.Brand>
                    <NavLink className='nav' id='sponsors' to='/Sponsors'>SPONSORS</NavLink>
                    <NavLink className='nav' to='/Outreach'>OUTREACH</NavLink>
                    <NavLink className='nav' to='/Contact'>CONTACT US</NavLink>
            </Nav>
        </Headroom>
        </Navbar>
    )

}