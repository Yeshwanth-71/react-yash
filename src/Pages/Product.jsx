
import React, { useState } from 'react'
import Col  from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row';
import Sidenav from '../Components/Sidenav';
import Header from '../Components/Header'

function Product() {
    const [Count , setCount] = useState(0);
  return (
  
    <Row>
    <Col sm={2}>
        <Sidenav />
    </Col>
    <Col sm={10}>
        <Header/>
    <div className='Products'>
        <h1>Counter Value:{Count}</h1>
      <button onClick={()=>setCount(Count+1)}>incement</button>
      <button onClick={()=>setCount(Count-1)}>decrement</button>
      <button onClick={()=>setCount(Count*0)}>reset</button>
    </div>
    </Col>
    </Row>
  );
}

export default Product;
