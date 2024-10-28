import React from 'react';
import { productlist } from '../Data/Earbuds';

function Earbuds() {
   

    return (
        <div className='any'>
            {productlist.map((item) => (
                <div className='new' key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    
                    <img src={item.img} alt={item.title} style={{  height: "auto", marginRight: "20px" }} />
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h2>Brand: {item.Brand}</h2>
                        <h2>ID: {item.id}</h2>
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

export default Earbuds;
