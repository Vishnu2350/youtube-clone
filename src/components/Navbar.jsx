import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';


const Navba1 = () => {
  return (
    
   <Navbar
      expand="lg"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #ddd',
        padding: '10px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container fluid style={{ display: 'flex', alignItems: 'center' }}>
        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '22px',
            color: '#cc0000',
            marginRight: '20px',
          }}
        >
          Learn Hub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '16px',
            }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              style={{
                color: '#333',
                fontWeight: '500',
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/Bookmark"
              style={{
                color: '#333',
                fontWeight: '500',
              }}
            >
              Bookmarks
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/Watched"
              style={{
                color: '#333',
                fontWeight: '500',
              }}
            >
              Watched
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/About"
              style={{
                color: '#333',
                fontWeight: '500',
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  )
}

export default Navba1