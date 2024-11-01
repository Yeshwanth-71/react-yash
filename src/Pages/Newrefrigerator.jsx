import React from 'react';
import { ref } from '../Data/Fridge';
import { Link } from 'react-router-dom';

function Newmobile() {
  return (
    <div className="product-container">
      {ref.map((e) => (
        <Link 
          to={`/fridge/${e.id}`} 
          style={{ textDecoration: "none", color: "black" }} 
          key={e.id}  // Adding key prop for each Link
        >
          <div className="product-card">
            <img src={e.img} alt={`${e.Brand} ${e.Capacity}`} className="product-image" />
            <div className="product-info">
              <h2>Brand:{e.Brand}</h2>
              <h2>Price:₹{e.Price}</h2>
              <button className='btn btn-warning'>Add to Cart</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Newmobile;
