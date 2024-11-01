import React from 'react';
import { Laptop } from '../Data/Laptop';
import { Link } from 'react-router-dom';

function Newmobile() {
  return (
    <div className="product-container">
      {Laptop.map((e) => (
        <Link 
          to={`/laptop/${e.id}`} 
          style={{ textDecoration: "none", color: "black" }} 
          key={e.id}  // Adding key prop for each Link
        >
          <div className="product-card">
            <img src={e.Image} alt={`${e.Brand} ${e.ModelName}`} className="product-image" />
            <div className="product-info">
              <h2>Brand:{e.Brand}</h2>
              <h3>Model:{e.ModelName}</h3>
              <h3>Price:₹{e.Price}</h3>
              <button className='btn btn-warning'>Add to Cart</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Newmobile;
