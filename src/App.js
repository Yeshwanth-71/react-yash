import React from 'react'
import './App.css'
import Login from './Pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import  Dashboard  from './Pages/Dashboard';
import User from './Pages/User';
import Settings  from './Pages/Settings';
function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/'  element={<Login />} />
          <Route path='/signup'  element={<Signup />} />
          <Route path='/dashboard'  element={<Dashboard />} />
          <Route path='/user'  element={<User />} />
          <Route path='/settings'  element={<Settings />} />
        </Routes>
      </Router>


      
    </div>
  )
}

export default App