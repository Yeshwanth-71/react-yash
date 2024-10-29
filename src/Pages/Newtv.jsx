import React from 'react'
import {Television} from '../Data/Television'
import {Link} from 'react-router-dom'
function Newmobile() {
  return (
    <div>
      {
        Television.map((e)=>{
            return(
                <Link to={`/tv/${e.id}`} style={{textDecoration:"none",color:"black"}}>
                    <div className='new'>
                        <img src={e.images} alt="" />
                        <p>{e.Brand}</p>
                        <p>{e.DisplayTechnology}</p>
                        <p>{e.Resolution}</p>
                        <p>{e.RefreshRate}</p>
                        <p>{e.price}</p>
                    </div>
                </Link>
            )
        })
      }
    </div>
  )
}

export default Newmobile
