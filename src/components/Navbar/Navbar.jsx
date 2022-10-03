import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const navLinks = ['Accueil', 'A propos', 'Projets', 'Contact'];

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
    };
    return (
      <li key={content} onClick={handleClickNav} className='navbar__link'>
        {content}
      </li>
    );
  };

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
          {navLinks.map((nav) => renderNavLinks(nav))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
