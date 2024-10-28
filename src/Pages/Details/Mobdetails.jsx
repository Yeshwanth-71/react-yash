import React from 'react'
import { useParams } from 'react-router-dom'
import {productdata} from '../../Data/Mobile'

function MobDet() {
    const {id} = useParams();
    const mob = productdata.find((e)=> e.id === id)
    
  return (
    <div>
        <p>Mobile Product details</p>
    </div>
  )
}

export default MobDet;