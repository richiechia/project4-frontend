import logo from '../../../logo.svg'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Navbar1 () {

  return (
    // <nav className="nav">
    
    // <a href="/" className="site-title"> Site Name</a>
    // <ul>
    //   <li className= "active">
    //     <a href="/pricing">Pricing</a>
    //   </li>
    //   <li>
    //     <a href="/about">About</a>
    //   </li>
    // </ul>

    // </nav>
    <div >
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
      <Navbar.Brand href="/">
        <img src={logo} width="40px" height="40px" alt=''/>
        Attendance
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="nav-links">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>

          <NavDropdown title="Test">
            <NavDropdown.Item href="/test/1">Test1</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    </div>
  )
}

export default Navbar1