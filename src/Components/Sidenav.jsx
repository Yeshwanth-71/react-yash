import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MdSpaceDashboard, MdError } from "react-icons/md";
import { FaMobileAlt, FaTv, FaProductHunt, FaUser } from "react-icons/fa";
import { IoMdLaptop } from "react-icons/io";
import { BsEarbuds } from "react-icons/bs";  
import { BiSolidFridge } from "react-icons/bi";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidenav visibility on mobile
  const toggleSidenav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Menu (Mobile View) */}
      <button className="sidenav-toggle btn btn-dark d-md-none" onClick={toggleSidenav}>
        {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidenav ${isOpen ? 'open' : ''}`}>
        <h2 className="sidenav-heading mt-3">Menu</h2>
        <ul className="nav-items">
          <li className="mb-5 mt-5">
            <NavLink to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
              <MdSpaceDashboard /> Dashboard
            </NavLink>
          </li>
          <li className="mb-5">
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/mobile">
                <FaMobileAlt /> Mobile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/earbuds">
                <BsEarbuds /> Earbuds
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/laptop">
                <IoMdLaptop /> Laptop
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tv">
                <FaTv /> TV's
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/refrigerators">
                <BiSolidFridge /> Refrigerators
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className="mb-5">
            <NavLink to="/products" style={{ textDecoration: "none", color: "white" }}>
              <FaProductHunt /> Products
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/error" style={{ textDecoration: "none", color: "white" }}>
              <MdError /> Error
            </NavLink>
          </li>
          <li className="mb-5">
            <NavLink to="/user-profile" style={{ textDecoration: "none", color: "white" }}>
              <FaUser /> User Profile
            </NavLink>
          </li>
        </ul>
        <Link to="/" className="logout-button">
          <button className="btn btn-primary btn-lg" aria-label="Logout">
            Logout
          </button>
        </Link>
      </nav>
    </>
  );
}

export default Sidenav;
