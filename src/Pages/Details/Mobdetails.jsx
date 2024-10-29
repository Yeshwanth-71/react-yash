import React from 'react'
import { useParams } from 'react-router-dom'
import {productdata} from '../../Data/Mobile'

function MobDet() {
    const {id} = useParams();
    const item = productdata.find((e)=> e.id === Number(id))
    
  return (
    <div className='any'>
            {productdata.map((item) => (
                <div className='new' >
                    
                    <img src={item.img} alt={item.title}  />

                    
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h2>Brand: {item.Brand}</h2>
                        <h2>Price: <span style={{ fontSize: '0.8em' }}>₹</span>{item.price}</h2>
                        <button 
                            className='btn btn-warning' 
                           
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default MobDet;