import { Col, Row } from 'react-bootstrap'
import React, { useState } from 'react'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'

function Products() {

  const [Count , setCount] = useState(0);

  return (
    <div className='container-fluid'>
        <Row>
            <Col sm={2}>
                <Sidenav />
            </Col>
            <Col sm={10}>
                <Header/>

                <div className='container border p-5 my-5'>
                  <h1>Counter Value:{Count}</h1>
                  <button className='btn btn-primary m-5' onClick={()=>setCount(Count+1)}>increment</button>
                  <button className='btn btn-warning m-5' onClick={()=>setCount(Count-1)}>decrement</button>
                  <button className='btn btn-danger m-5' onClick={()=>setCount(Count*0)}>reset</button>
                </div>

                
            </Col>
        </Row>

        
    </div>
  )
}

export default Products