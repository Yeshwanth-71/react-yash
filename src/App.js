import React from 'react';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Dashboard  from './Pages/Dashboard';

function App() {
  return (
    <div className='main'>
      <Router>
        <Routes>
          {/* Route to the Login component */}
          <Route path='/' exact element={<Login />} />
          <Route path='/Signup' exact element={<Signup />} />
          <Route path='/Dashboard' exact element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
