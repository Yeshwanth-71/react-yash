import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faTable, faUser, faPenToSquare, faPalette } from '@fortawesome/free-solid-svg-icons';
import { CiLock } from "react-icons/ci";
import { FaUikit, FaGithub } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { IoLogOutOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";

function Sidenav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='sidenav bg-dark text-light'>
      <h2 className='sidenav-heading'>Menu</h2>
      <ul className="nav-items">
        <li>
          <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faDisplay} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/tables' className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faTable} /> Tables
          </NavLink>
        </li>
        <li>
          <NavLink to='/forms' className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faPenToSquare} /> Forms
          </NavLink>
        </li>
        <li>
          <NavLink to='/ui' className={({ isActive }) => (isActive ? 'active' : '')}>
            <FaUikit /> UI
          </NavLink>
        </li>
        <li>
          <NavLink to='/responsive' className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faDisplay} /> Responsive
          </NavLink>
        </li>
        <li>
          <NavLink to='/styles' className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faPalette} /> Styles
          </NavLink>
        </li>
        <li>
          <NavLink to='/user' className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faUser} /> User Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/login1' className={({ isActive }) => (isActive ? 'active' : '')}>
            <CiLock /> Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/error' className={({ isActive }) => (isActive ? 'active' : '')}>
            <MdError /> Error
          </NavLink>
        </li>
        <li onClick={toggleDropdown} className="dropdown">
          <span>
            <RxDropdownMenu /> Dropdown
          </span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><NavLink to="/dropdown/item1">Item 1</NavLink></li>
              <li><NavLink to="/dropdown/item2">Item 2</NavLink></li>
              <li><NavLink to="/dropdown/item3">Item 3</NavLink></li>
            </ul>
          )}
        </li>
        <li>
          {/* Change from NavLink to anchor for external link */}
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FaGithub /> GitHub
          </a>
        </li>
      </ul>
      <h2 className='sidenav-heading logout-heading'><IoLogOutOutline /> Logout</h2>
    </nav>
  );
}

export default Sidenav;
