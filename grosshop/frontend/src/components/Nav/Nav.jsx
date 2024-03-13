import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import './Nav.scss';

const Navigation = () => {
  const [activePage, setActivePage] = useState('');

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  };

  return (
    <nav className='nav'>
      <Link to="/">
        <MenuItem
          pageName="Home"
          isActive={activePage === "Home"}
          handleClick={handlePageClick}
        />
      </Link>
      <Link to="/orders">
        <MenuItem
          pageName="Orders"
          isActive={activePage === "Orders"}
          handleClick={handlePageClick}
        />
      </Link>
      <Link to="/cart" className='cart-link'>
        <img src="/Cart-green.svg" alt="Cart" />
      </Link>
      <Link to="/wishlist">
        <MenuItem
          pageName="Wishlist"
          isActive={activePage === "Wishlist"}
          handleClick={handlePageClick}
        />
      </Link>
      <Link to="/profile">
        <MenuItem
          pageName="Profile"
          isActive={activePage === "Profile"}
          handleClick={handlePageClick}
        />
      </Link>
    </nav>
  );
};

export default Navigation;