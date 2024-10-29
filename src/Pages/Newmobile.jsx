import React from 'react'
import {productdata} from '../Data/Mobile'
import {Link} from 'react-router-dom'
function Newmobile() {
  return (
    <div>
      {
        productdata.map((e)=>{
            return(
                <Link to={`/mobile/${e.id}`}  style={{textDecoration:"none",color:"black"}}>
                    <div className='new'>
                        <img src={e.img} alt="" />
                        <p>{e.id}</p>
                        <p>{e.Brand}</p>
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
