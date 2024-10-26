import React from 'react';
import {Laptop} from '../Data/Laptop'

function Mobile() {
    return (
        <div className="any">
            {Laptop.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>ModelName: {item.ModelName}</p>  {/* Display the id */}
                    <p>ScreenSize: {item.ScreenSize}</p>
                    <p>CPUModel: {item.CPUModel}</p>
                    <p>Price: {item.Price}</p>
                    <img src={item.Image} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Mobile;