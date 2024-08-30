import React from 'react';
import './component/Navba.css';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function navbar() {
  return (
    <div>
      <>
        <Navbar expand="lg" className="Navbar">
          <Container fluid>
            {/* <Navbar.Brand href="#" className='nav-brand'>Navbar Offcanvas</Navbar.Brand> */}
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 pl-5">
                  <Link className="nav-link" to="#home">Home</Link>
                  <Link className="nav-link" to="#about">About</Link>
                  <Link className="nav-link" to="#education">Education</Link>                                                               
                  <Link className="nav-link" to="#Skill">Skill</Link>                                                               
                  <Link className="nav-link" to="#services">Services</Link>                                                                         
                  <Link className="nav-link" to="#projects">Projects</Link>                                                              
                  <Link className="nav-link" to="#msg">Contact</Link>
                  {/* <NavLink to="/" className="nav-link mx-lg-2" activeClassName="active">Home</NavLink>
                  <NavLink to="/About" className="nav-link mx-lg-2" activeClassName="active">About</NavLink>
                  <NavLink to="/Education" className="nav-link mx-lg-2" activeClassName="active">Education</NavLink>
                  <NavLink to="/Services" className="nav-link mx-lg-2" activeClassName="active">Services</NavLink>
                  <NavLink to="/Skill" className="nav-link mx-lg-2" activeClassName="active">Skill</NavLink>
                  <NavLink to="/Projects" className="nav-link mx-lg-2" activeClassName="active">Projects</NavLink>
                  <NavLink to="/Msg" className="nav-link mx-lg-2" activeClassName="active">Contect</NavLink> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default navbar;
