import React from 'react'
import {ref} from '../Data/Fridge'
import {Link} from 'react-router-dom'
function Newmobile() {
  return (
    <div>
      {
        ref.map((e)=>{
            return(
                <Link to={`/fridge/${e.id}`} style={{textDecoration:"none",color:"black"}}>
                    <div className='new'>
                        <img src={e.img} alt="" />
                        <p>{e.Brand}</p><br />
                        <p>{e.Capacity}</p><br />
                        <p>{e.Configuration}</p><br />
                        <p>{e.EnergyStar}</p><br />
                        <p>{e.Price}</p>
                    </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default Newmobile
