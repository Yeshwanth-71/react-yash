import React from 'react'
import { useParams } from 'react-router-dom'
import {ref} from '../../Data/Fridge'

function MobDet() {
    const {id} = useParams();
    const item = ref.find((e)=> e.id === Number(id))
    
    console.log(id)
    
  return (
    <div className='any'>
          <div>
            <img src={item.img} alt="" height={"400px"} />
            <h2>{item.Brand}</h2>
            <h2>{item.Capacity}</h2>
            <h2>{item.Configuration}</h2>
            <h2>{item.EnergyStar}</h2>
            <h2>₹{item.Price}</h2>
            <button className='btn btn-warning'>Add to Cart</button>
          </div>
        </div>
  )
}

export default MobDet;