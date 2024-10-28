import React from 'react'
import { useParams } from 'react-router-dom'
import {productlist} from '../../Data/Earbuds'

function MobDet() {
    const {id} = useParams();
    const mob = productlist.find((e)=> e.id === id)
    
  return (
    <div>
        <p>Mobile Product details</p>
    </div>
  )
}

export default MobDet;