import React from 'react';
import {ref} from '../Data/Fridge';


function Mobile() {
    return (
       
         <div className='any1'>
            {ref.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>Brand: {item.Brand}</p> 
                    <p>EnergyStar: {item.EnergyStar}</p> 
                    <p>Capacity: {item.Capacity}</p> 
                    <p>Price: {item.Price}</p>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
       
    );
}

export default Mobile;