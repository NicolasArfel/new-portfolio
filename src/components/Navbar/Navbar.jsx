import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);
  return (
    <>
      <nav className={color ? 'navbar navbar-scrolled' : 'navbar'}>
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
