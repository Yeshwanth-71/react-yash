import React from 'react';
import { productlist } from '../Data/Earbuds';
import { Link } from 'react-router-dom';

function Newmobile() {
  return (
    <div className="product-container">
      {productlist.map((e) => (
        <Link 
          to={`/earbuds/${e.id}`} 
          style={{ textDecoration: "none", color: "black" }}
          key={e.id}
        >
          <div className="product-card">
            <img src={e.img} alt={e.Brand} className="product-image" />
            <div className="product-info">
              <h2>{e.Brand}</h2>
              <h3>₹{e.price}</h3>
              <button className='btn btn-warning'>
              Add to Cart
            </button>
            </div>
           
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Newmobile;
