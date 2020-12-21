import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand>Steel Hawks</Navbar.Brand>
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
