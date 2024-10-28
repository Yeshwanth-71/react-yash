import React from 'react'
import { useParams } from 'react-router-dom'
import {Television} from '../../Data/Television'

function MobDet() {
    const {id} = useParams();
    const mob = Television.find((e)=> e.id === id)
    
  return (
    <div>
        <p>Mobile Product details</p>
    </div>
  )
}

export default MobDet;