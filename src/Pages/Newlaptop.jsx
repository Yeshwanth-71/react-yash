import React from 'react'
import {Laptop} from '../Data/Laptop'
import {Link} from 'react-router-dom'
function Newmobile() {
  return (
    <div>
      {
        Laptop.map((e)=>{
            return(
                <Link to={`/laptop/${e.id}`} style={{textDecoration:"none",color:"black"}}>
                    <div className='new11'>
                        <img src={e.Image} alt="" />
                      </div>
                      <div>
                        <p>{e.Brand}</p>
                        <p>{e.ModelName}</p>
                        <p>{e.ScreenSize}</p>
                        <p>{e.ColourSilver}</p>
                        <p>{e.HardDiskSize}</p>
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
