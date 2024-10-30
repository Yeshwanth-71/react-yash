import React from 'react'
import { useParams } from 'react-router-dom'
import {productdata} from '../../Data/Mobile'

function MobDet() {
    const {id} = useParams();
    const item = productdata.find((e)=> e.id === Number(id))
    
    console.log(id)
    
  return (
    <div className='any'>
          <div className=''>
            <img src={item.img} alt=""  height={"400px"} />
            <h2>{item.Brand}</h2>
            <h2>₹{item.price}</h2>
            <button className='btn btn-warning'>Add to Cart</button>

          </div>
        </div>
  )
}

export default MobDet;