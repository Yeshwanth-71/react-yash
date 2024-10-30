import React from 'react';
import { Television } from '../Data/Television';
import { Link } from 'react-router-dom';

function Newmobile() {
  return (
    <div className="product-container">
      {Television.map((e) => (
        <Link 
          to={`/tv/${e.id}`} 
          style={{ textDecoration: "none", color: "black" }} 
          key={e.id}  // Adding key prop for each Link
        >
          <div className="product-card">
            <img src={e.images} alt={`${e.Brand} ${e.DisplayTechnology}`} className="product-image" />
            <div className="product-info">
              <h2>{e.Brand}</h2>
              <h2>{e.DisplayTechnology}</h2>
              <h2>{e.Resolution}</h2>
              <h2>{e.RefreshRate}</h2>
              <h2>₹{e.price}</h2>
              <button className='btn btn-warning'>Add to Cart</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Newmobile;
