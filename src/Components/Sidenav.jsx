import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='sidenav bg-dark text-light'>
        <ul>
            <Link to='/dashboard'><li>Dashboard</li></Link> 
            <Link to='/user'><li>User Profile</li></Link>
            <Link to='/settings'><li>Settings</li></Link>
            <Link to='/maps'><li>Maps</li></Link>
           
        </ul>
    </div>
  )
}

export default Sidenav