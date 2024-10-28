import React from 'react';
import { ref } from '../Data/Fridge';
import { Link } from 'react-router-dom';

function Mobile() {
    

    return (<Link to='/fridge/:id' style={{textDecoration:"none",color:"black"}}>
        <div className='any3'>
            {ref.map((item, index) => (
                <div key={index} className='new22' >
                    
                    <img src={item.img} alt={item.title}  />
                    
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
        </Link>
    );
}

export default Mobile;
