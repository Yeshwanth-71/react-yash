import React from 'react';
import {productdata} from '../Data/Mobile'

function Mobile() {
    return (
        <div>
            {productdata.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>ID: {item.id}</p>  {/* Display the id */}
                    <p>Price: {item.price}</p>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Mobile;