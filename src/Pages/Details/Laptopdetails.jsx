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
            <h2>{item.Brand}</h2>
            <h2>{item.ModelName}</h2>
            <h2>{item.ScreenSize}</h2>
            <h2>{item.ColourSilver}</h2>
            <h2>{item.HardDiskSize}</h2>
            <h2>{item.Price}</h2>
            <button className='btn btn-warning'>Add to Cart</button>
          </div>
        </div>
  )
}

export default MobDet;