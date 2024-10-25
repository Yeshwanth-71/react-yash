import React from 'react';
import {Laptop} from '../Data/Laptop'

function Mobile() {
    return (
        <div className="any">
            {Laptop.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>ID: {item.id}</p>  {/* Display the id */}
                    <p>Price: {item.Price}</p>
                    <img src={item.Image} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Mobile;