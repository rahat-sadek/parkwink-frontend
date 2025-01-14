import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
