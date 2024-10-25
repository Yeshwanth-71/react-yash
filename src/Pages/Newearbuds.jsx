import React from 'react';
import { product1 } from './Data/Newmobile';

function Mobile() {
    return (
        <div>
            {product1.map((item) => (
                <div className='new1'>
                    <h2>{item.title}</h2>
                    <p>ID: {item.id}</p>  {/* Display the id */}
                    <p>Price: {item.price}</p>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    );
}
