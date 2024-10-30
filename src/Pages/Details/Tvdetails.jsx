import React from 'react'
import { useParams } from 'react-router-dom'
import {Television} from '../../Data/Television'

function MobDet() {
    const {id} = useParams();
    const item = Television.find((e)=> e.id === Number(id))
    
    console.log(id)
    
  return (
    <div className='any'>
          <div>
            <img src={item.images} alt=""  height={"400px"}/>
            <h2>{item.Brand}</h2>
            <h2>{item.DisplayTechnology}</h2>
            <h2>{item.Resolution}</h2>
            <h2>{item.RefreshRate}</h2>
            <h2>₹{item.price}</h2>
            <button className='btn btn-warning'>Add to Cart</button>
          </div>
        </div>
  )
}

export default MobDet;