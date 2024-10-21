import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="Signup d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%', backgroundColor:"aqua" }}>
        <h1 className="text-center mb-4">Sign Up</h1>
        
        <div className="form-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter your name" 
            required 
          />
        </div>
        
        <div className="form-group mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email" 
            required 
          />
        </div>
        
        <div className="form-group mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter your password" 
            required 
          />
        </div>
        
        <div className="form-check mb-3">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="rememberMe" 
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        
        <Link to={'/'}>
          <button className="btn btn-primary w-100">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
