import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Set your predefined credentials here
  const validUsername = 'yeshwanth';
  const validPassword = 'reddy123';

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if the input matches predefined credentials
    if (username === validUsername && password === validPassword) {
      navigate('/dashboard');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className='reddy'>
    <div className="login">
      <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
        <label for="">Username:(Hint:yeshwanth)</label><br />
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br /><br />
          <label for="">Password:(Hint:1234)</label><br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <br />
        <p>
          Don't have an Account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Login;