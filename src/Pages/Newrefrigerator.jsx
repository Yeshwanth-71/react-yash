import React from 'react';
import {ref} from '../Data/Fridge';


function Mobile() {
    return (
       
         <div className='any1'>
            {ref.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>ID: {item.id}</p>  {/* Display the id */}
                    <p>Price: {item.Price}</p>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
       
    );
}

export default Mobile;