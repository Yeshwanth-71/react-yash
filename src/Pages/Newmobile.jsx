import React from 'react';
import {productdata} from '../Data/Mobile'

function Mobile() {
    return (
        <div className='any'>
            {productdata.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>Brand: {item.Brand}</p>
                    <p>Price: {item.price}</p>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Mobile;