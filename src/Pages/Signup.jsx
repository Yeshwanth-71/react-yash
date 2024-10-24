import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='Signup'>
      <div className="card">
        <h1>Signup Page</h1><br />
        <input type="text" placeholder='Enter username' /> <br />
        <input type="password" placeholder='Enter password' /><br />
        <input type="email" placeholder='Enter email' /><br />
        
        <Link to='/' ><button className='btn btn-primary'> Signup</button></Link><br />
        
        <input type="checkbox" id='check'style={{ marginRight: '5px' }} />
        <label htmlFor="check">Remember me</label>
      </div>
    </div>
  );
}

export default Signup;
