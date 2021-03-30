import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="ml-5">Foodeli</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-5">
                        <Nav.Link className="ml-5">Home</Nav.Link>
                        <Nav.Link className="ml-5">Orders</Nav.Link>
                        <Nav.Link className="ml-5">Admin</Nav.Link>
                        <Nav.Link className="ml-5">Deals</Nav.Link>
                        <Button variant="outline-success" className="ml-5">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Home;