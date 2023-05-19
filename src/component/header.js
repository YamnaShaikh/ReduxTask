import React from "react";

import { Navbar, Nav, Form, FormControl, Button, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <div className="container">
    
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to='/'>AddEmployee</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/employeeRecords'>AddEmployee</NavLink></Nav.Link>
          </Nav>
          
            <Form inline className="navform">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default Header;
