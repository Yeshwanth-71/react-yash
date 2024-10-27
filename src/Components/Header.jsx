import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faCog, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";

function MyNavbar() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to go back to the previous page
  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="mb-4">
      <Container fluid>
        {/* Left Arrow for Back Navigation */}
        <Nav className="me-auto">
          <Nav.Link onClick={handleBackClick} className="text-light" aria-label="Go Back">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </Nav.Link>
        </Nav>

        {/* Search Bar */}
        <Form className="d-flex me-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="me-2"
            style={{ width: '200px' }} // Adjust width as necessary
          />
        </Form>

        {/* Center alignment for Dropdown */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto"> {/* Centers the menu items */}
            {/* Dropdown for Yeshwanth */}
            <Dropdown className="me-5">
              <Dropdown.Toggle variant="light" id="yeshwanth-dropdown">
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

          {/* Cart Icon */}
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/cart" className="text-light" aria-label="Shopping Cart">
              <TiShoppingCart size={32} /> {/* Increase the size here */}
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-light" aria-label="Logout">
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
