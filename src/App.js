import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';
import Settings from './Pages/Settings';
import Mobile from './Pages/Mobile';
import Earbuds from './Pages/Earbuds'
import Laptop from './Pages/Laptop';
import Refrigerator from './Pages/Refrigerator';
import TV from './Pages/TV';
import Error from './Pages/Error';
import Nodata from './Pages/Nodata';
import Logout from './Pages/Logout'; // Renamed to avoid conflict


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/mobile' element={<Mobile />} />
          <Route path='/earbuds' element={<Earbuds />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/fridge' element={<Refrigerator />} />
          <Route path='/tv' element={<TV />} />
          <Route path='/error' element={<Error />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/*' element={<Nodata />} />
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
