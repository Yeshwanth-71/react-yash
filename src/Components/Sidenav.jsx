import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faMap, faIcons } from '@fortawesome/free-solid-svg-icons';  // Import icons

const Sidenav = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-light p-3">
      <h4 className="mb-4">Menu</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/icons" className="nav-link">
            <FontAwesomeIcon icon={faIcons} className="me-2" /> Icons
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/userprofile" className="nav-link">
            <FontAwesomeIcon icon={faUser} className="me-2" /> User Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/maps" className="nav-link">
            <FontAwesomeIcon icon={faMap} className="me-2" /> Maps
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
