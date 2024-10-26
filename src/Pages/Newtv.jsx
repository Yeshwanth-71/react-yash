import React from 'react';
import {Television} from '../Data/Television';

function Mobile() {
    return (
        <div className="any2">
            {Television.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>Brand: {item.Brand}</p> 
                    <p>DisplayTechnology: {item.DisplayTechnology}</p>
                    <p>Resolution: {item.Resolution}</p>
                    <p>RefreshRate: {item.RefreshRate}</p>
                    <p>Price: {item.Price}</p>
                    <img src={item.images} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Mobile;