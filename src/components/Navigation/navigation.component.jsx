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
            pinStart={-1000}>
            <Nav>
            <Navbar.Brand><Link id='steel' to={'/'}><img className="navLogo" src="/media/whitehack.png" alt="Steel Hawks Logo"/><p1 id='steelhawkstext'>STEEL HAWKS</p1></Link></Navbar.Brand>
            <DropdownButton id='Dropdown' title='OUR TEAM'>
                <DropdownItem className='dropdownElement' href='#/ExecutiveBoard'>EXECUTIVE BOARD</DropdownItem>
                <DropdownItem className='dropdownElement' href='#/Mentors'>MENTORS</DropdownItem>
                <DropdownItem className='dropdownElement' href='#/Team'>SUBTEAMS</DropdownItem>
            </DropdownButton>
                    <NavLink className='nav' to='/Robots'>ROBOTS</NavLink>
                    <NavLink className='nav' to='/Awards'>AWARDS</NavLink>
                    <NavLink className='nav' to='/Sponsors'>SPONSORS</NavLink>
                    <NavLink className='nav' to='/Outreach'>OUTREACH</NavLink>
                    <NavLink className='nav' to='/Contact'>CONTACT US</NavLink>
            </Nav>
        </Headroom>
        </Navbar>
    )

}

// export const Navigation = (props) => {
//     const navbarhidden = !this.state.visible;
//     return (
//         <Navbar useTransparent className="justify-content-between" expand="md">
//             <Navbar.Brand><Link id='steel' to={'/'}><img className="navLogo" src="/media/whitehack.png" alt="Steel Hawks Logo"/><p1 id='steelhawkstext'>STEEL HAWKS</p1></Link></Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse>
//                 <Nav className="mr-auto"/>
//                 <Nav fill>
                    
                    

//                     <Dropdown>
//                         <Dropdown.Toggle variant="Success" id='dropdownBasic'>
//                             OUR TEAM
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu id='dropdown'>
//                             <Dropdown.Item ><NavLink id='dropdownElement' to='/ExecutiveBoard'>EXECUTIVE BOARD</NavLink></Dropdown.Item>
//                             <Dropdown.Item ><NavLink id='dropdownElement' to='/Mentors'>MENTORS</NavLink> </Dropdown.Item>
//                             <Dropdown.Item ><NavLink id='dropdownElement' to='/Team'>SUBTEAMS</NavLink> </Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                     <NavLink id='nav' to='/Robots'>ROBOTS</NavLink>
//                     <NavLink id='nav' to='/Awards'>AWARDS</NavLink>
//                     <NavLink id='nav' to='/Sponsors'>SPONSORS</NavLink>
//                     <NavLink id='nav' to='/Outreach'>OUTREACH</NavLink>
//                     <NavLink id='nav' to='/Contact'>CONTACT US</NavLink>


//                    {/* {props.routes.map(route =>(
//                         <Nav.Item key={route.id}>
//                             <Nav.Link>
//                                 <Link style={{ textDecoration: 'none', color: 'inherit' }} to={route.path}>
//                                     {route.name}
//                                 </Link>
//                             </Nav.Link>
//                         </Nav.Item>
//                     ))} */}
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>

//     )
// }