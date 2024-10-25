import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import {  FaMobileAlt, FaTv } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { BsEarbuds } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import {  FaGithub } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { Link } from 'react-router-dom'; // Change to react-router-dom Link
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function Sidenav() {
  return (
    <nav className='sidenav bg-dark text-light'>
      <h2 className='sidenav-heading'>Menu</h2><br />
      <ul className="nav-items">
        <li>
          <NavLink to='/dashboard'>
          <MdSpaceDashboard />Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/mobile'>
          <FaMobileAlt /> Mobiles
          </NavLink>
        </li>
        <li>
          <NavLink to='/earbuds'>
          <BsEarbuds /> Earbuds
          </NavLink>
        </li>
        <li>
          <NavLink to='/laptop'>
          <IoMdLaptop /> Laptop
          </NavLink>
        </li>
        <li>
          <NavLink to='/tv'>
          <FaTv />
          TV
          </NavLink>
        </li>
        <li>
          <NavLink to='/fridge'>
          <CgSmartHomeRefrigerator /> Refrigerator
          </NavLink>
        </li>
        <li>
          <NavLink to='/user'>
          <FaUser />  User Profile
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
