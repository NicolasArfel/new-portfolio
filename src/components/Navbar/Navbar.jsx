import React, { useState } from 'react';
import './Navbar.scss';
import './Hamburgers.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState(false);

  const navLinks = ['Accueil', 'A propos', 'Projets', 'Contact'];

  // i create a toggle for the navbar / burger menu
  const activeToggle = () => {
    setIsActive(!isActive);
  };

  // this function make the scroll automatic by clicking on a link
  const renderNavLinks = (content) => {
    const contentValue = `${content.toLowerCase()}`;
    const scrollToId = () => {
      if (contentValue === 'a propos') {
        return 'about';
      } else {
        return contentValue;
      }
    };
    const handleClickNav = () => {
      document
        .getElementById(scrollToId())
        .scrollIntoView({ behavior: 'smooth' });
      activeToggle();
    };
    return (
      <li key={content} onClick={handleClickNav} className='navbar__link'>
        {content}
      </li>
    );
  };

  // change the navbar background color on scroll
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
      <nav
        className={
          isActive
            ? color
              ? 'navbar navbar-scrolled is-active'
              : 'navbar is-active'
            : color
            ? 'navbar navbar-scrolled'
            : 'navbar'
        }
      >
        <button
          onClick={activeToggle}
          className={
            isActive
              ? 'hamburger hamburger--squeeze is-active'
              : 'hamburger hamburger--squeeze'
          }
          type='button'
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
        <h1 className='navbar__logo'>NA</h1>
        <ul className='navbar__list'>
          {navLinks.map((nav) => renderNavLinks(nav))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
