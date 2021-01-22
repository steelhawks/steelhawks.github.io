import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from 'react-router-dom'

import './Navbar.style.css'

export const Navigation = (props) => {

    return (

        <Navbar className="justify-content-between" variant="dark" bg="dark" expand="md">
            <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}><img className="navLogo" src="/media/whitehack.png" alt="Steel Hawks Logo"/> Steel Hawks</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto"/>
                <Nav fill>
                    {props.routes.map(route => (
                        <Nav.Item key={route.id}>
                            <Nav.Link>
                                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={route.path}>
                                    {route.name}
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )

}
