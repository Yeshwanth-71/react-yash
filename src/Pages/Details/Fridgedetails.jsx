import React from 'react'
import { useParams } from 'react-router-dom'
import {ref} from '../../Data/Fridge'

function MobDet() {
    const {id} = useParams();
    const mob = ref.find((e)=> e.id === id)
    
  return (
    <div>
        <p>Mobile Product details</p>
    </div>
  )
}

export default MobDet;