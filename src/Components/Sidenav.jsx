import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MdSpaceDashboard, MdError } from "react-icons/md";
import { FaMobileAlt, FaTv, FaGithub, FaUser } from "react-icons/fa";
import { IoMdLaptop, IoMdSettings } from "react-icons/io";
import { BsEarbuds } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidenav() {
  const [showCategories, setShowCategories] = useState(false); // State to manage category dropdown visibility

  const toggleCategories = () => {
    setShowCategories(!showCategories); // Toggle dropdown visibility
  };

  return (
    <nav className='sidenav bg-dark text-light'>
      <h2 className='sidenav-heading'>Menu</h2><br />
      <ul className="nav-items">
        <li>
          <NavLink to='/dashboard'>
            <MdSpaceDashboard /> Dashboard
          </NavLink>
        </li>

        {/* Categories Section */}
        <li>
          <h5 className='text-light' onClick={toggleCategories} style={{ cursor: 'pointer' }}>
          <IoMdMenu /> Categories
          </h5>
        </li>
        {showCategories && ( // Conditional rendering for category items
          <ul className="nav flex-column ml-3"> {/* Add margin to indent dropdown */}
            <li>
              <NavLink to='/mobile' className="dropdown-item">
                <FaMobileAlt /> Mobiles
              </NavLink>
            </li>
            <li>
              <NavLink to='/earbuds' className="dropdown-item">
                <BsEarbuds /> Earbuds
              </NavLink>
            </li>
            <li>
              <NavLink to='/laptop' className="dropdown-item">
                <IoMdLaptop /> Laptop
              </NavLink>
            </li>
            <li>
              <NavLink to='/tv' className="dropdown-item">
                <FaTv /> TV
              </NavLink>
            </li>
            <li>
              <NavLink to='/fridge' className="dropdown-item">
                <CgSmartHomeRefrigerator /> Refrigerator
              </NavLink>
            </li>
          </ul>
        )}

        <li>
          <NavLink to='/user'>
            <FaUser /> User Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/error'>
            <MdError /> Error
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings'>
            <IoMdSettings /> Settings
          </NavLink>
        </li>
        <li>
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            <FaGithub /> GitHub
          </a>
        </li>
      </ul>
      <Link to='/'>
        <center>
          <button className='btn btn-primary btn-lg' aria-label="Logout">
            Logout
          </button>
        </center>
      </Link>
    </nav>
  );
}

export default Sidenav;
