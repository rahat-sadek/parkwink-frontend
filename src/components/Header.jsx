import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; 

const Header = () => (
  <header>
    <div className="logo-container">
      <Link to={'/'}>
      <h1 id='title'>PARK WINK</h1>
      </Link>
    </div>
    
    <nav aria-label="Main Navigation">
      <ul className="nav-links">
        <li><Link to="/addcars" aria-label="Go to User Dashboard">Add cars</Link></li>
        <li><Link to="/carlist" aria-label="Go to Admin Dashboard">Car list</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
