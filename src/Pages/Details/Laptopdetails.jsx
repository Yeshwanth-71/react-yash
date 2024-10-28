import React from 'react'
import { useParams } from 'react-router-dom'
import {Laptop} from '../../Data/Laptop'

function MobDet() {
    const {id} = useParams();
    const mob = Laptop.find((e)=> e.id === id)
    
  return (
    <div>
        <p>Mobile Product details</p>
    </div>
  )
}

export default MobDet;