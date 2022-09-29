import React from 'react';
import photo from './photo-de-profil.jpg';
import './Home.scss';

const Home = () => {
  return (
    <>
      <div className='home'>
        <section className='home__title'>
          <p className='home__title-text'>
            Bonjour, je suis
            <div className='home__title-name'>
              <span className='letter 1'>N</span>
              <span className='letter 2'>I</span>
              <span className='letter 3'>C</span>
              <span className='letter 4'>O</span>
              <span className='letter 5'>L</span>
              <span className='letter 6'>A</span>
              <span className='letter 7'>S</span>
            </div>
          </p>
          <h2 className='home__subTitle'>Développeur Web / Web mobile</h2>
          <button>Me Contacter</button>
        </section>
        <img className='home__image' src={photo} alt='portrait de moi' />
      </div>
    </>
  );
};

export default Home;
