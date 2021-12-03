import React from "react"
import {
    Nav,
    NavDropdown,
    Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./img/logo_light.png";

const Navigation = () => {

    return (
        <div className="naviigationbar">
            <Navbar bg="myRead" variant="dark" expand="lg">

                <Navbar.Brand className="Navbar-Brand" href="#home_page">
                    <img
                        src={Logo}
                        width="70"
                        height="70"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="tag">Home</Nav.Link>

                        <Nav.Link as={Link} to="/Aboutus" className="tag">About</Nav.Link>

                        <Nav.Link href="#other" className="tag">Other</Nav.Link>

                        <Nav.Link href="#footer_area" className="tag">contact us</Nav.Link>

                        <Nav.Link as={Link} to="/Events" className="tag">Events</Nav.Link>


                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default Navigation