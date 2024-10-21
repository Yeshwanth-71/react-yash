import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='Login'>
      <h1>Login Page</h1>
      <input type="text" placeholder='Enter Username' /><br /> <br />
      <input type="password" placeholder='Enter Password' /> <br /> <br />
     <Link to={'Dashboard'}> <button className='btn btn-primary'>Login</button></Link>
      <p>Don't have an Account? <Link to={'Signup'}>SignUp </Link></p>

    </div>
  );
}

export default Login
