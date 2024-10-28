import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function ContainerExample() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-light">
          <Sidenav />
        </Col>

        <Col sm={10} className='yash'>
          <Header />
          <div style={{ textAlign: "center", marginTop: "70px" }}>
            <h1 style={{ fontSize: "3rem"}}>Dashboard</h1>
           
          </div>

          {/* Nested grid system within the main content area */}
          <Container className='one mb-4'>
            <Row >
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="" width={"300px"} height={"300px"}/>
                <h2>Samsung</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                  <img src="https://m.media-amazon.com/images/I/71XNeka-BRL._AC_UY218_.jpg" alt=""width={"290px"} height={"290px"} />
                  <h2>One plus</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/711ZTkL0l8L._AC_UY218_.jpg" alt="" width={"290px"} height={"290px"} />
                <h2>Iqoo</h2>
              </Col>
            </Row>

            <Row className="mt-3" >
              <Col md={12} className="text-end">
                <Link to="/mobile"><h5>View all</h5></Link>
              </Col>
            </Row>
            
          </Container>

          <Container className='two mb-4'>
            <Row>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/51+e7yrgPpL._AC_UL640_QL65_.jpg" alt="" width={"300px"} height={"300px"}/>
                <h2>Noise</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                  <img src="https://m.media-amazon.com/images/I/61Qqg+T8nsL._AC_UL320_.jpg" alt=""width={"290px"} height={"290px"} />
                  <h2>Samsung</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/610x9ERJegL._AC_UL320_.jpg" alt="" width={"290px"} height={"290px"} />
                <h2>Boston</h2>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12} className="text-end">
                <Link to="/fridge"><h5>View all</h5></Link>
              </Col>
            </Row>
           
          </Container>
          
          <Container className='one mb-4'>
            <Row>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/61-Y-eWXqtL._SX569_.jpg" alt="" width={"300px"} height={"300px"}/>
                <h2>Dell</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                  <img src="https://m.media-amazon.com/images/I/71czGb00k5L._SX569_.jpg" alt=""width={"290px"} height={"290px"} />
                  <h2>Acer</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/61qlqvTsocL._AC_UY218_.jpg" alt="" width={"290px"} height={"290px"} />
                <h2>Hp</h2>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12} className="text-end">
                <Link to="/fridge"><h5>View all</h5></Link>
              </Col>
            </Row>
            
          </Container>

          <Container className='one mb-4'>
            <Row>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/71N7mwf1C7L._AC_UY218_.jpg" alt="" width={"300px"} height={"300px"}/>
                <h2>TCL</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                  <img src="https://m.media-amazon.com/images/I/71ydzmWXW0L._SX569_.jpg" alt=""width={"290px"} height={"290px"} />
                  <h2>LG</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/418p0EjmkhL._SY300_SX300_QL70_FMwebp_.jpg" alt="" width={"290px"} height={"290px"} />
                <h2>Sony</h2>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12} className="text-end">
                <Link to="/fridge"><h5>View all</h5></Link>
              </Col>
            </Row>
            
          </Container>

          <Container className='one mb-4'>
            <Row>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/61hEEWSj-cL._SY879_.jpg" alt="" width={"300px"} height={"300px"}/>
                <h2>Samsung</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                  <img src="https://m.media-amazon.com/images/I/61rnslxsZFL._SX679_.jpg" alt=""width={"290px"} height={"290px"} />
                  <h2>Haier</h2>
              </Col>
              <Col sm={1}></Col>
              <Col md={3} className='yash'>
                <img src="https://m.media-amazon.com/images/I/61+Z57deoBL._SX679_.jpg" alt="" width={"290px"} height={"290px"} />
                <h2>Panasonic</h2>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={12} className="text-end">
                <Link to="/fridge"><h5>View all</h5></Link>
              </Col>
            </Row>
          
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
