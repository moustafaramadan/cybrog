import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar  expand="lg">
        <Container>
          <Link to="/">  <img src={logo}/> </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 cybrog-nav"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/*  */}
              <Nav.Link >
              <Link to="/" style={{ color: "#eee", textDecoration:"none" }}> Home </Link>
              </Nav.Link>
              {/* <Nav.Link href="#action2" style={{ color: "#eee" }}>
                Browse
              </Nav.Link>
              <Nav.Link href="#action3" style={{ color: "#eee" }}>
                Streams
              </Nav.Link> */}
              <Nav.Link >
              <Link to="/profile" style={{ color: "#eee", textDecoration:"none" }}> Profile </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
