import React from 'react'
import {productlist} from '../Data/Earbuds'
import {Link} from 'react-router-dom'
function Newmobile() {
  return (
    <div>
      {
        productlist.map((e)=>{
            return(
                <Link to={`/earbuds/${e.id}`} style={{textDecoration:"none",color:"black"}}>
                    <div className='new11'>
                        <img src={e.img} alt="" />
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
