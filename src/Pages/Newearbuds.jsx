import React from 'react';
import { productlist } from '../Data/Earbuds';

function Earbuds() {
    return (
        <div className='any'>
            {productlist.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>Brand: {item.Brand}</p>  {/* Display the id */}
                    <p>Price: {item.price}</p>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    );
}
export default Earbuds;