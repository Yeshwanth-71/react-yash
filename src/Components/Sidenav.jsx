import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faTable, faUser, faPenToSquare, faPalette } from '@fortawesome/free-solid-svg-icons';
import { CiLock } from "react-icons/ci";
import { FaUikit, FaGithub } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { Link } from 'react-router-dom'; // Change to react-router-dom Link
import { DiResponsive } from "react-icons/di";
import { IoMdSettings } from "react-icons/io";

function Sidenav() {
  return (
    <nav className='sidenav bg-dark text-light'>
      <h2 className='sidenav-heading'>Menu</h2><br />
      <ul className="nav-items">
        <li>
          <NavLink to='/dashboard'>
            <FontAwesomeIcon icon={faDisplay} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/tables'>
            <FontAwesomeIcon icon={faTable} /> Tables
          </NavLink>
        </li>
        <li>
          <NavLink to='/forms'>
            <FontAwesomeIcon icon={faPenToSquare} /> Forms
          </NavLink>
        </li>
        <li>
          <NavLink to='/ui'>
          <FaUikit /> UI
          </NavLink>
        </li>
        <li>
          <NavLink to='/responsive'>
          <DiResponsive />
          Responsive
          </NavLink>
        </li>
        <li>
          <NavLink to='/styles'>
            <FontAwesomeIcon icon={faPalette} /> Styles
          </NavLink>
        </li>
        <li>
          <NavLink to='/user'>
            <FontAwesomeIcon icon={faUser} /> User Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/login1'>
            <CiLock /> Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/error'>
            <MdError /> Error
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings'>
          <IoMdSettings />  Settings
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
            <FaGithub /> GitHub
          </a>
        </li>
      </ul>
      <Link to='/logout'><center>
        <button className='btn btn-primary btn-lg' aria-label="Logout">
          Logout
        </button></center>
      </Link>
    </nav>
  );
}

export default Sidenav;
