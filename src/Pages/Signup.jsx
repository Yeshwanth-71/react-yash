import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='Signup'>
        <div className="card">
        <h1>Signup page</h1><br />
        <input type="text" placeholder='Enter username' /> <br /><br />
        <input type="password" placeholder='Enter password' /><br /><br />
        <input type="email" placeholder='Enter email' /><br />
        <Link to='/' ><button className='btn btn-primary'> Signup</button></Link>
        </div>
    </div>
    
  )
}

export default Signup