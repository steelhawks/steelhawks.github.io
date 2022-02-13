import React from 'react';
import { Dropdown } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link, NavLink } from 'react-router-dom'
import './Navbar.style.css'

export const Navigation = (props) => {

    return (

        <Navbar className="justify-content-between" expand="md">
            <Navbar.Brand><Link id='steel' to={'/'}><img className="navLogo" src="/media/whitehack.png" alt="Steel Hawks Logo"/> STEEL HAWKS</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto"/>
                <Nav fill>
                    
                    <NavLink id='nav' to='/' >HOME</NavLink>
                    <Dropdown>
                        <Dropdown.Toggle variant="Success" id='dropdownBasic'>
                            OUR TEAM
                        </Dropdown.Toggle>
                        <Dropdown.Menu id='dropdown'>
                            <Dropdown.Item ><NavLink id='dropdownElement' to='/ExecutiveBoard'>EXECUTIVE BOARD</NavLink></Dropdown.Item>
                            <Dropdown.Item ><NavLink id='dropdownElement' to='/Mentors'>MENTORS</NavLink> </Dropdown.Item>
                            <Dropdown.Item ><NavLink id='dropdownElement' to='/Team'>SUBTEAMS</NavLink> </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavLink id='nav' to='/Robots'>ROBOTS</NavLink>
                    <NavLink id='nav' to='/Awards'>AWARDS</NavLink>
                    <NavLink id='nav' to='/Sponsors'>SPONSORS</NavLink>
                    <NavLink id='nav' to='/Outreach'>OUTREACH</NavLink>
                    <NavLink id='nav' to='/Contact'>CONTACT US</NavLink>


                   {/* {props.routes.map(route =>(
                        <Nav.Item key={route.id}>
                            <Nav.Link>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={route.path}>
                                    {route.name}
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    ))} */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}