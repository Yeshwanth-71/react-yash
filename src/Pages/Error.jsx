import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';
import { Link } from 'react-router-dom'; // Import Link if using react-router

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col sm={2}><Sidenav /></Col>

        <Col sm={10}>
          <Header />
          <div style={{ textAlign: "center", marginTop: "200px" }}>
            <h1 style={{ fontSize: "3rem", color: "#dc3545" }}>Error 404!</h1>
            <p style={{ fontSize: "1.5rem" }}>Page Not Found</p>
            <Link to="/" className="btn btn-primary">Go Back to Home</Link> {/* Button to navigate back */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
