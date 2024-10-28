import React from 'react';
import { Laptop } from '../Data/Laptop';
import { Link } from 'react-router-dom';

function Mobile() {
   

    return (
        <Link to='/laptop/:id' style={{textDecoration:"none",color:"black"}}>
        <div className="any">
            {Laptop.map((item, index) => (
                <div key={index} className='new' >
                    
                    <img src={item.Image} alt={item.title}  />
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h2>Model Name: {item.ModelName}</h2>  {/* Display the model name */}
                        <h2>Screen Size: {item.ScreenSize}</h2>
                        <h2>CPU Model: {item.CPUModel}</h2>
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
