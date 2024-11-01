import React from 'react'
import { useParams } from 'react-router-dom'
import {Television} from '../../Data/Television'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Components/Sidenav'
import Header from '../../Components/Header'

function MobDet() {
    const {id} = useParams();
    const item = Television.find((e)=> e.id === Number(id))
    
    console.log(id)
    
  return (
    <Row>
    <Col sm={2}>
        <Sidenav />
    </Col>
    <Col sm={10}>
    <Header/>
    <div className='any'>
          <div>
            <img src={item.images} alt=""  height={"300px"}/>
            <h2>Brand:{item.Brand}</h2>
            <h2>Technology:{item.DisplayTechnology}</h2>
            <h2>Resolution:{item.Resolution}</h2>
            <h2>Refershrate:{item.RefreshRate}</h2>
            <h2>Price:₹{item.price}</h2>
            <button className='btn btn-warning'>Add to Cart</button>
          </div>
        </div>
    </Col>
    </Row>
  )
}

export default MobDet;