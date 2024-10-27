import React from 'react';
import { Laptop } from '../Data/Laptop';

function Mobile() {
    const handleButtonClick = (item) => {
        console.log("Viewing details for:", item);
        // Add navigation or other actions here, if needed
    };

    return (
        <div className="any">
            {Laptop.map((item, index) => (
                <div key={index} className='new' style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    
                    <img src={item.Image} alt={item.title} style={{  height: "auto", marginRight: "20px" }} />
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h2>Model Name: {item.ModelName}</h2>  {/* Display the model name */}
                        <h2>Screen Size: {item.ScreenSize}</h2>
                        <h2>CPU Model: {item.CPUModel}</h2>
                        <h2>Price: {item.Price}</h2>
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
