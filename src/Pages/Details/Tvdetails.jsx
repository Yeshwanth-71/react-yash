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
            <img src={item.images} alt="" />
            <p>{item.id}</p>
            <p>{item.Brand}</p>
            <p>{item.DisplayTechnology}</p>
            <p>{item.Resolution}</p>
            <p>{item.RefreshRate}</p>
            <p>{item.price}</p>
          </div>
        </div>
  )
}

export default MobDet;