import React from 'react';
import {Television} from '../Data/Television';

function Mobile() {
    return (
        <div className="any2">
            {Television.map((item) => (
                <div className='new'>
                    <h2>{item.title}</h2>
                    <p>ID: {item.id}</p>  {/* Display the id */}
                    <p>Price: {item.Price}</p>
                    <img src={item.images} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Mobile;