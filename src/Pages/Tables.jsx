import { Col, Row } from 'react-bootstrap'
import React from 'react'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'

function Tables() {
  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
            <Header/>
                <h1>Tables</h1>
            </Col>
        </Row>

        
    </div>
  )
}

export default Tables