import React from 'react'
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='Login'>
        <div className="card">
        <h1>Login Page</h1><br />
        <input type="text" placeholder='Enter Username' /> <br />
        <input type="text" placeholder='Enter password' /><br />
        <Link to='/dashboard'><button className='btn btn-primary'>Login</button></Link>
        <p>Don't have an Account? <Link to='/signup'> SignUp</Link></p>
        </div>
    </div>
  )
}

export default Login