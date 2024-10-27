import React from 'react';
import { Television } from '../Data/Television';

function Mobile() {
    const handleButtonClick = (item) => {
        console.log("Viewing details for:", item);
        // You can add navigation or other actions here, if needed
    };

    return (
        <div className="any2">
            {Television.map((item, index) => (
                <div key={index} className='new' style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    
                    <img src={item.images} alt={item.title} style={{  height: "auto", marginRight: "20px" }} />
                    
                    {/* Text content section */}
                    <div>
                        <h2>{item.title}</h2>
                        <h2>Brand: {item.Brand}</h2>
                        <h2>Display Technology: {item.DisplayTechnology}</h2>
                        <h2>Resolution: {item.Resolution}</h2>
                        <h2>Refresh Rate: {item.RefreshRate}</h2>
                        <h2>price: {item.price}</h2>
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
