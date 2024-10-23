import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'

function Forms() {
  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
            <Header/>
                <h1>Forms</h1>
            </Col>
        </Row>

        
    </div>
  )
}

export default Forms