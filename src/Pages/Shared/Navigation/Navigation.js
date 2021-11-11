import React from "react";
import "./Navigation.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo/benz-motors.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#232628" }}
        variant="dark"
      >
        <Container className="nav-style">
          <NavLink
            className="logo-size"
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "5px",
              fontWeight: "600",
            }}
            to="/home"
          >
            <img src={logo} alt="" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink to="/explore">
                <Button
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  EXPLORE
                </Button>
              </NavLink>
              {user.email && (
                <NavLink to="/dashboard">
                  <Button
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "600",
                    }}
                  >
                    DASHBOARD
                  </Button>
                </NavLink>
              )}
              {user.email && <Button>{user.displayName}</Button>}
              {user.email ? (
                <Button onClick={logOut}>Logout</Button>
              ) : (
                <NavLink to="/login">
                  <Button>LOGIN</Button>
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
