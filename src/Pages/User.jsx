import { Col, Row } from 'react-bootstrap'
import React from 'react'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'

function User() {
  return (
       <div className='container-fluid'>
        <Row>
            <Col sm={3}>
                <Sidenav />
            </Col>
            <Col sm={9}>
            <Header/>
                <h1>User Profile</h1>
            </Col>
        </Row>

        
    </div>
  )
}

export default User