import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';
import './ContainerExample.css'; // Import custom CSS

function ContainerExample() {
  return (
    <div className="main-layout">
      <Sidenav /> {/* Sidebar should be fixed, so we don't need to place it inside a Bootstrap grid */}
      <div className="main-content">
        <Header />
        <Container fluid>
          <Row>
            <Col>
              <h1>Dashboard</h1>
              <p>Scrollable content goes here...</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ContainerExample;
