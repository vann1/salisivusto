import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../images/Logo.png';
import '../styles/style.css';

const Navigationbar = () => {

  return (
    <Navbar expand="xl" className="bg-custom sticky-navbar">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Navbar.Toggle aria-controls="navbarSupportedContent" className='navbartoggler' />
        <Navbar.Collapse id="navbarSupportedContent" className=''>
          <Nav className="col-sm-8">
            <Nav.Item className="me-4 mt-1" id="testi">
              <Link className="nav-link fancy-link" to="/">
                Etusivu
              </Link>
            </Nav.Item>
            <Nav.Item className="me-4 mt-1" id="testi">
              <Link className="nav-link fancy-link" to="/exercises">
                Liikkeitä
              </Link>
            </Nav.Item>
            <Nav.Item className="me-4 mt-1" id="testi">
              <Link className="nav-link fancy-link" to="/nutrition">
                Ruokavalio
              </Link>
            </Nav.Item>
            <Nav.Item className="me-4 mt-1" id="testi">
              <Link className="nav-link fancy-link" to="/contacts">
                Yhteystiedot
              </Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex ms-auto mt-1" id="testi">
            <FormControl
              className="me-2 fancy-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="btn fancy-button" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Navigationbar };