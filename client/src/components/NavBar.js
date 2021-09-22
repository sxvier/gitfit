
import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionLoggedOut } from '../redux/actions/user';
import "../components/main.css"


function NavBar() {
    const { checked, user } = useSelector(state => state.user);
    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault()
        fetch('/api/v1/users/logout')
            .then(res => res.json())
            .then(data => {
                dispatch(actionLoggedOut())
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-3">
            <Container>
                <img className="logo" src="images/Fit.jpg"  alt="FittLogo" size="30%"/>
                <Navbar.Brand as={Link} to="/">GitFit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {checked && user ? (
                            <>
                                <Nav.Link href="/logout" onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        )}
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/workouts">Workouts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/meals">Meals</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
