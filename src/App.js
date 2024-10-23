import React from 'react';
import './App.css';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import User from './Pages/User';
import Settings from './Pages/Settings';
import Tables from './Pages/Tables';
import Forms from './Pages/Forms';
import Ui from './Pages/Ui';
import Responsive from './Pages/Responsive';
import Styles from './Pages/Styles';
import Login1 from './Pages/Login1';
import Error from './Pages/Error';
import { GitHub as GitHubIcon } from '@mui/icons-material'; // Renamed for clarity
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
          <Route path='/tables' element={<Tables />} />
          <Route path='/forms' element={<Forms />} />
          <Route path='/ui' element={<Ui />} />
          <Route path='/responsive' element={<Responsive />} />
          <Route path='/styles' element={<Styles />} />
          <Route path='/login1' element={<Login1 />} />
          <Route path='/error' element={<Error />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/github' element={<GitHubIcon />} />
          <Route path='/*' element={<Nodata />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
