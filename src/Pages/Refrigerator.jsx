import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';
import Newrefrigerator from '../Pages/Newrefrigerator'

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col sm={2}><Sidenav/></Col>

        <Col sm={10}>
        <Header/>
        <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h1>Refrigerators</h1></div>
        <Newrefrigerator />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;