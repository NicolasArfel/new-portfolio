import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <h1 className='navbar__logo'>NA</h1>
        <ul className='navbar__list'>
          <li className='navbar__link'>
            <p>A propos</p>
          </li>
          <li className='navbar__link'>
            <p>Projets</p>
          </li>
          <li className='navbar__link'>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
