import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; // Import the Button component
import { FaSeedling } from 'react-icons/fa'; // Import the agriculture-related icon

export default function NavbarComp() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <FaSeedling style={{ marginRight: '8px', fontSize: '1.5rem' }} />
                    Navbar
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Button variant="outline-primary" href="#contact">Login</Button> {/* Right-aligned button */}
            </Container>
        </Navbar>
    );
}
