import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';        
import Sidenav from './Components/Sidenav';
import Icons from './Pages/Icons';
import UserProfile from './Pages/UserProfile';
import Maps from './Pages/Maps';

function App() {
  return (
    <Router>
      <div className='container-fluid'>
        <div className='row'>
          
          {/* Sidebar taking 2 out of 12 columns for small screens and above */}
          <div className='col-sm-2 bg-light'>
            <Sidenav />
          </div>
          
          {/* Main content taking 10 out of 12 columns for small screens and above */}
          <div className='col-sm-10'>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/icons' element={<Icons />} />
              <Route path='/userprofile' element={<UserProfile />} />
              <Route path='/maps' element={<Maps />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
