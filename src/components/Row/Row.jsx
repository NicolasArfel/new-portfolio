import React from 'react';
import './Row.scss';
import photo from './photo-de-profil.jpg';

const Row = () => {
  return (
    <>
      <div className='row'>
        <div className='project__container'>
          <img src={photo} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Titre du projet</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé avec react, tailwind, firebase pour
              l'authentification
            </p>
            <button className='button'>Voir le projet</button>
          </div>
        </div>
        <div className='project__container'>
          <img src={photo} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Titre du projet</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé avec react, tailwind, firebase pour
              l'authentification
            </p>
            <button className='button'>Voir le projet</button>
          </div>
        </div>
        <div className='project__container'>
          <img src={photo} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Titre du projet</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé avec react, tailwind, firebase pour
              l'authentification
            </p>
            <button className='button'>Voir le projet</button>
          </div>
        </div>
        <div className='project__container'>
          <img src={photo} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Titre du projet</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé avec react, tailwind, firebase pour
              l'authentification
            </p>
            <button className='button'>Voir le projet</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
