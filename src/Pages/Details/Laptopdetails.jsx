import React from 'react'
import { useParams } from 'react-router-dom'
import {Laptop} from '../../Data/Laptop'

function MobDet() {
    const {id} = useParams();
    const item = Laptop.find((e)=> e.id === Number(id))
    
    console.log(id)
    
  return (
    <div className='any'>
          <div>
          <img src={item.Image} alt="" />
            <p>{item.Brand}</p>
            <p>{item.ModelName}</p>
            <p>{item.ScreenSize}</p>
            <p>{item.ColourSilver}</p>
            <p>{item.HardDiskSize}</p>
            <p>{item.Price}</p>
          </div>
        </div>
  )
}

export default MobDet;