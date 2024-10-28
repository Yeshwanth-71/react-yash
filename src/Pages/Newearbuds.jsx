import React from 'react';
import { productlist } from '../Data/Earbuds';
import { Link } from 'react-router-dom';

function Earbuds() {
    return (
        <Link to='/earbuds/:id' style={{textDecoration:"none",color:"black"}}>
        <div className='any'>
            {productlist.map((item) => (
                <div className='new' key={item.id}>
                    <img src={item.img} alt={item.title} />
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h4>Brand: {item.Brand}</h4>
                        <h4>Price: <span style={{ fontSize: '0.8em' }}>₹</span>{item.price}</h4>
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

export default Earbuds;
