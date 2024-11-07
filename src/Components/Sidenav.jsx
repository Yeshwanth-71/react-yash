import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MdSpaceDashboard, MdError } from "react-icons/md";
import { FaMobileAlt, FaTv, FaGithub, FaUser } from "react-icons/fa";
import { IoMdLaptop, IoMdSettings, IoMdMenu, IoMdClose } from "react-icons/io";
import { BsEarbuds } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidenav() {
  const [showCategories, setShowCategories] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage sidenav visibility on mobile

  const toggleCategories = () => setShowCategories(!showCategories);
  const toggleSidenav = () => setIsOpen(!isOpen); // Toggle sidenav visibility on mobile

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="sidenav-toggle btn btn-dark d-md-none" onClick={toggleSidenav}>
        {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
      </button>

      {/* Sidenav */}
      <nav className={`sidenav bg-dark text-light ${isOpen ? 'open' : ''}`}>
        <h2 className='sidenav-heading'>Menu</h2><br />
        <ul className="nav-items">
          <li>
            <NavLink to='/dashboard' onClick={() => setIsOpen(false)}>
              <MdSpaceDashboard /> Dashboard
            </NavLink>
          </li>
          <li>
            <h5 className='text-light' onClick={toggleCategories} style={{ cursor: 'pointer' }}>
              <IoMdMenu /> Categories
            </h5>
          </li>
          {showCategories && (
            <ul className="nav flex-column ml-3">
              <li><NavLink to='/mobile' className="dropdown-item" onClick={() => setIsOpen(false)}><FaMobileAlt /> Mobiles</NavLink></li>
              <li><NavLink to='/earbuds' className="dropdown-item" onClick={() => setIsOpen(false)}><BsEarbuds /> Earbuds</NavLink></li>
              <li><NavLink to='/laptop' className="dropdown-item" onClick={() => setIsOpen(false)}><IoMdLaptop /> Laptop</NavLink></li>
              <li><NavLink to='/tv' className="dropdown-item" onClick={() => setIsOpen(false)}><FaTv /> TV</NavLink></li>
              <li><NavLink to='/fridge' className="dropdown-item" onClick={() => setIsOpen(false)}><CgSmartHomeRefrigerator /> Refrigerator</NavLink></li>
            </ul>
          )}
          <li><NavLink to='/products' onClick={() => setIsOpen(false)}><FaUser /> Products</NavLink></li>
          <li><NavLink to='/user' onClick={() => setIsOpen(false)}><FaUser /> User Profile</NavLink></li>
          <li><NavLink to='/error' onClick={() => setIsOpen(false)}><MdError /> Error</NavLink></li>
          <li><NavLink to='/settings' onClick={() => setIsOpen(false)}><IoMdSettings /> Settings</NavLink></li>
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
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
    </>
  );
}

export default Sidenav;
