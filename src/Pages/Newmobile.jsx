import React from 'react';
import { productdata } from '../Data/Mobile';

function Mobile() {
    const handleButtonClick = (item) => {
        console.log("Viewing details for:", item);
        // Add navigation or other actions here, if needed
    };

    return (
        <div className='any'>
            {productdata.map((item, index) => (
                <div key={index} className='new' style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    
                    <img src={item.img} alt={item.title} style={{  height: "auto", marginRight: "20px" }} />
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h2>Brand: {item.Brand}</h2>
                        <h2>Price: {item.price}</h2>
                        <button 
                            className='btn btn-warning' 
                            onClick={() => handleButtonClick(item)}
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
