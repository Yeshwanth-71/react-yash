import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='Signup container-fluid'>
       <div className="card p-3" style={{ maxWidth: '500px', width: '100%', overflowY: 'hidden' }}>

             <h1>Sign Up</h1><br /><br />
             <input type="text" placeholder='Enter your name' /><br /><br />
             <input type="email" placeholder='Enter your email' /><br /><br />
             <input type="password" placeholder='Enter your password' /><br /><br />
             <Link to={'/'}><button>Sign Up</button></Link><br /><br />
             <input type="checkbox" id='new' />
             <label id='new'>remember me</label>
    </div>
    </div>
  )
}

export default Signup
