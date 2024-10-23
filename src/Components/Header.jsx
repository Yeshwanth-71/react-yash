import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        {/* Left side: Search Bar */}
        <Form className="d-flex mr-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="me-2" // Bootstrap utility for margin
            style={{ width: '200px' }} // Adjust width as necessary
          />
        </Form>

        {/* Center alignment for Sample Menu and Yeshwanth */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto"> {/* Centers the menu items */}
            {/* Dropdown for Sample Menu */}
            <Dropdown className="nav-dropdown-gap">
              <Dropdown.Toggle variant="secondary" id="sample-menu-dropdown">
                Sample Menu
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#item1">Item 1</Dropdown.Item>
                <Dropdown.Item href="#item2">Item 2</Dropdown.Item>
                <Dropdown.Item href="#item3">Item 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Dropdown for Yeshwanth */}
            <Dropdown className="ms-3"> {/* Use Bootstrap's margin-start utility for spacing */}
              <Dropdown.Toggle variant="secondary" id="yeshwanth-dropdown">
                Yeshwanth
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/user">
                  <FontAwesomeIcon icon={faUser} /> My Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/settings">
                  <FontAwesomeIcon icon={faCog} /> Settings
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/messages">
                  <FontAwesomeIcon icon={faEnvelope} /> Messages
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>

          {/* GitHub Icon and Logout Icon on the right side */}
          <Nav className="ml-auto"> {/* Ensures icons align to the right */}
            <Nav.Link href="https://github.com/" target="_blank" className="text-light">
              <FaGithub size={20} /> {/* Adjust size as necessary */}
            </Nav.Link>
            <Nav.Link as={Link} to="/logout" className="text-light">
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" /> {/* Logout Icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
