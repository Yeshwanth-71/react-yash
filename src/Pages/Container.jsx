import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';
import Newmobile from './Pages/Newmobile';
import Newearbuds from './Pages/Newearbuds';

import './ContainerExample.css'; // Optional: for layout-specific styling

function ContainerExample() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="sidenav-col">
          <Sidenav />
        </Col>

        <Col sm={10} className="main-content">
          <Header />
          <div className="content-area d-flex">
            <h1>Dashboard</h1>
            <Newrefrigerator />
            <Newmobile />
            <Newearbuds />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
