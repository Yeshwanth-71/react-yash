import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='Login d-flex justify-content-center align-items-center vh-100'>
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%', backgroundColor:"aqua" }}>
      <h1>Login Page</h1>
      <input type="text" placeholder='Enter Username' /><br /> <br />
      <input type="password" placeholder='Enter Password' /> <br /> <br />
     <Link to={'Dashboard'}> <button className='btn btn-primary'>Login</button></Link>
      <p>Don't have an Account? <Link to={'Signup'}>SignUp </Link></p>
      </div>
    </div>
  );
}

export default Login
