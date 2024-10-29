import React from 'react'
import { useParams } from 'react-router-dom'
import {productlist} from '../../Data/Earbuds'

function MobDet() {
    const {id} = useParams();
    const item = productlist.find((e)=> e.id === Number(id))
    
    console.log(id)
    
  return (
    <div className='any'>
          <div>
            <img src={item.img} alt="" height={"300px"} width={"300px"}  />
            <h2>{item.price}</h2>
            <h2>{item.Brand}</h2>
          <button className='btn btn-warning'>Add to Cart</button>
          </div>
        </div>
  )
}

export default MobDet;