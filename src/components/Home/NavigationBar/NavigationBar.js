import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const NavigationBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="ml-5"><Link to="/">Foodeli</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-5">
                        <Link className="ml-5 mt-2" to="/home">Home</Link>
                        <Link className="ml-5 mt-2" to="/orders">Orders</Link>
                        <Link className="ml-5 mt-2" to="/admin">Admin</Link>
                        <Nav.Link className="ml-5 nav-link disabled">Deals</Nav.Link>
                        <Link to="/login">
                            <Button variant="outline-success" className="ml-5">
                                {(loggedInUser.email)?.split('@')[0] || 'Login'}    
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default NavigationBar;