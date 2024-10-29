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
            <img src={item.img} alt="" />
            <p>{item.id}</p>
            <p>{item.Brand}</p>
          </div>
        </div>
  )
}

export default MobDet;