import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';

function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col sm={2}><Sidenav/></Col>

        <Col sm={10}>
        <Header/>
        <div style={{ textAlign: "center", marginTop: "70px" }}>
        <h1>User Profile</h1></div>
        <Container>
          <Row className='luffy'>
            <img src="https://images6.alphacoders.com/132/1325915.png" alt="" height={"300px"} width={"50px"} className='circle' />
          </Row>
        </Container>
        <Container>
          <Row>
          <Col sm={6}>
          <p>Name:</p>
          <input type="text" placeholder='Enter your name' /><br /><br />
          <p>Email:</p>
          <input type="email" placeholder='Enter your email' />
          </Col>
         
          <Col onSubmit={6}>
          <p>Password:</p>
          <input type="password" placeholder='enter password' /><br /><br />
          <p>Confirm password:</p>
          <input type="password" placeholder='enter password' /><br /><br />
          <button className='btn btn-primary'>Submit</button>
          </Col>
          </Row>
        </Container>

        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;