import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faCog, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

function MyNavbar() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to go back to the previous page
  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="mb-4"> {/* Fixed Navbar */}
      <Container fluid>
        {/* Left Arrow for Back Navigation */}
        <Nav className="me-auto">
          <Nav.Link onClick={handleBackClick} className="text-light">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" /> {/* Left Arrow Icon */}
          </Nav.Link>
        </Nav>

        {/* Left side: Search Bar */}
        <Form className="d-flex mr-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="me-2"
            style={{ width: '200px' }} // Adjust width as necessary
          />
        </Form>

        {/* Center alignment for Sample Menu and Yeshwanth */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto"> {/* Centers the menu items */}
            {/* Dropdown for Sample Menu */}


            {/* Dropdown for Yeshwanth */}
            <Dropdown className="me-5">
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
          <Nav className="ml-auto">
            
            <Nav.Link as={Link} to="/" className="text-light">
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" /> {/* Logout Icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
