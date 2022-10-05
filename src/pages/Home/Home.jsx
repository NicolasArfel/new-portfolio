import React from 'react';
import photo from './photo-de-profil.jpg';
import './Home.scss';

const Home = () => {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id='accueil' className='home'>
        <div className='home__title'>
          <div className='home__title-text'>
            <p>Bonjour, je suis </p>
            <div className='home__title-name'>
              <p className='letter-1'>N</p>
              <p className='letter-2'>I</p>
              <p className='letter-3'>C</p>
              <p className='letter-4'>O</p>
              <p className='letter-5'>L</p>
              <p className='letter-6'>A</p>
              <p className='letter-7'>S</p>
            </div>
          </div>
          <h1 className='home__subTitle'>Développeur Web / Web mobile</h1>
          <button className='button' onClick={handleClick}>
            Me Contacter
          </button>
        </div>
        <img className='home__image' src={photo} alt='portrait de moi' />
      </div>
    </>
  );
};

export default Home;
