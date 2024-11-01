import React from 'react'
import { useParams } from 'react-router-dom'
import {ref} from '../../Data/Fridge'
import { Col, Row } from 'react-bootstrap'
import Sidenav from '../../Components/Sidenav'
import Header from '../../Components/Header'

function MobDet() {
    const {id} = useParams();
    const item = ref.find((e)=> e.id === Number(id))
    
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
            <img src={item.img} alt="" height={"400px"} />
            <h2>Brand:{item.Brand}</h2>
            <h2>Capacity:{item.Capacity}</h2>
            <h2>Configuration:{item.Configuration}</h2>
            <h2>Energy Star:{item.EnergyStar}</h2>
            <h2>Price:₹{item.Price}</h2>
            <button className='btn btn-warning'>Add to Cart</button>
          </div>
        </div>

    </Col>
    </Row>
  )
}

export default MobDet;