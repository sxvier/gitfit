import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/">GitFitt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/login">Logout</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/workouts">Workouts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/meals">Meals</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
