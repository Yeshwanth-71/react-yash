import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'

function Styles() {
  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={3}>
                <Sidenav />
            </Col>
            <Col sm={9}>
            <Header/>
                <h1>Styles</h1>
            </Col>
        </Row>

        
    </div>
  )
}

export default Styles