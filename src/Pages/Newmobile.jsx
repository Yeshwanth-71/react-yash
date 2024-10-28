import React from 'react';
import { productdata } from '../Data/Mobile';

function Mobile() {
   

    return (
        <div className='any'>
            {productdata.map((item, index) => (
                <div key={index} className='new' >
                    
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
    );
}

export default Mobile;
