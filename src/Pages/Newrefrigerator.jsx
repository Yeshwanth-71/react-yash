import React from 'react';
import { ref } from '../Data/Fridge';

function Mobile() {
    

    return (
        <div className='any1'>
            {ref.map((item, index) => (
                <div key={index} className='new' style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    
                    <img src={item.img} alt={item.title} style={{  height: "auto", marginRight: "20px" }} />
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h2>Brand: {item.Brand}</h2> 
                        <h2>Energy Star Rating: {item.EnergyStar}</h2> 
                        <h2>Capacity: {item.Capacity}</h2> 
                        <h2>Price: <span style={{ fontSize: '0.8em' }}>₹</span>{item.Price}</h2>
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
