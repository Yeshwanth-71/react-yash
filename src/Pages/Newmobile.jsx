import React from 'react';
import { productdata } from '../Data/Mobile';
import { Link } from 'react-router-dom';


function Newmobile() {
  return (
    <div className="product-container">
      {productdata.map((e) => (
        <Link to={`/mobile/${e.id}`} key={e.id} style={{ textDecoration: "none", color: "black" }}>
          <div className="product-card">
            <img src={e.img} alt={e.Brand} className="product-image" />
            <div className="product-info">
              <h2>Brand:{e.Brand}</h2>
              <h2>Price:₹{e.price}</h2>
              <button className='btn btn-warning'>Add to Cart</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Newmobile;
