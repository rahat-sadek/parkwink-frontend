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
        <li><Link to="/user" aria-label="Go to User Dashboard">User</Link></li>
        <li><Link to="/admin" aria-label="Go to Admin Dashboard">Admin</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
