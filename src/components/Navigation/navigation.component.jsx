import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from 'react-router-dom'

export const Navigation = (props) => {
    return (
        <Navbar variant="dark" bg="dark" expand="md">
            <Navbar.Brand><img src="/media/whitehack.png"/> Steel Hawks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    {props.routes.map(route => (
                        <Nav.Link>
                            <Link to={route.path}>
                                {route.name}
                            </Link>
                        </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
