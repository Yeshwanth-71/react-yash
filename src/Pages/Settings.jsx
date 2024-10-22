// src/Pages/Settings.js
import React from 'react';
import { Col, Row } from 'react-bootstrap'; // Make sure to import Row and Col from react-bootstrap
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header'; // Corrected import statement

function Settings() {
  return (
    <div className='Settings'>
      <Row>
        <Col sm={2}>
          <Sidenav />
        </Col>
        <Col sm={10}>
          <Header />
          <h2>Settings</h2> {/* Add a title or content here */}
        </Col>
      </Row>
    </div>
  );
}

export default Settings;
