import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./navbar.css";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
  const accessToken = localStorage.getItem("accessToken");
  console.log("token", accessToken);

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    navigate('/login')
  }

  return (
    <div>
      <Navbar expand="lg" className="navbarStyle">
        <Container>
          <Navbar.Brand href="#home" className="navbarBrand">
            Connect People
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/"}>
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              {accessToken ? (
                <Link to={"/login"}>
                <Nav.Link href="#logout" onClick={handleLogout}>Logout</Nav.Link>
              </Link>
              ) : (
                <Link to={"/login"}>
                  <Nav.Link href="#login">Login</Nav.Link>
                </Link>
              )}
              <Link to={"/register"}>
                <Nav.Link href="#register">Register</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
