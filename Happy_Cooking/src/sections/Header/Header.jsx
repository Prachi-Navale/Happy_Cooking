import React from 'react';
import './Header.css';
import logo from '../../Assets/logo.png'; // Import the logo image

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
