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
        <h1>Refrigerator</h1>
        <Newrefrigerator />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;