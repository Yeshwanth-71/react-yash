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
            <img src={item.img} alt="" />
            <p>{item.id}</p><br />
            <p>{item.Brand}</p><br />
            <p>{item.Capacity}</p><br />
            <p>{item.Configuration}</p><br />
            <p>{item.EnergyStar}</p>
            <p>{item.Price}</p>
          </div>
        </div>
  )
}

export default MobDet;