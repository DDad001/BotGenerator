import React from "react";
import { Row, Container, Col, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import NavLogo from '../Images/Logo_Small.png';
import Hanger from "./Hanger";
import Deployment from "./Deployment";
import Objective from "./Objective";
import Home from "./Home";


function Navigation() {
  return (
    <>
      <BrowserRouter>
          <Navbar bg="dark" variant="dark"expand="lg">
            <Container>
              <Navbar.Brand href="#home" as={Link} to={"/home"}>
                  <img src={NavLogo} width="34px" height="35px" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="TextNavColor mx-3" as={Link} to={"/objective"}>Objective</Nav.Link>
                  <Nav.Link href="#link" className="TextNavColor mx-3" as={Link} to={"/hanger"}>Hanger</Nav.Link>
                  <Nav.Link href="#link" className="TextNavColor mx-3" as={Link} to={"/deployment"}>Deployment</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
 
            <Routes>
                
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/objective" element={<Objective/>}></Route>
                <Route path="/hanger" element={<Hanger/>}></Route>
                <Route path="/deployment" element={<Deployment/>}></Route>
            </Routes>
      </BrowserRouter>
      </>
  );
}

export default Navigation;
