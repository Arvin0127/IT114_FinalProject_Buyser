import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineRobot } from "react-icons/ai";

const MyNav = () => {

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/"><AiOutlineRobot className="fs-2 text-info" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/resume">Resume</Link>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
};

export default MyNav;