import React from 'react';
import './Row.scss';
import photo from './photo-de-profil.jpg';
import photo1 from './advice.png';
import photo2 from './converter.png';
import photo3 from './form.png';
import photo4 from './snap.png';

const Row = () => {
  return (
    <>
      <div className='row'>
        <div className='project__container'>
          <img src={photo1} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Advice Generator</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé avec du CSS et Javascript pour faire le
              lien avec l'API AdviceSlip. Il s'agit d'un générateur de conseils.
            </p>
            <a
              href='https://myadvice-generator.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button'>Voir le projet</button>
            </a>
          </div>
        </div>
        <div className='project__container'>
          <img src={photo2} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Converter</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé avec React et Sass. Il s'agit d'un
              convertisseur de devises.
            </p>
            <a
              href='https://converter-with-react.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button'>Voir le projet</button>
            </a>{' '}
          </div>
        </div>
        <div className='project__container'>
          <img src={photo3} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Formulaire inscription</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé CSS dans un optique de responsivité
              totale.
            </p>
            <a
              href='https://static-signup-form.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button'>Voir le projet</button>
            </a>{' '}
          </div>
        </div>
        <div className='project__container'>
          <img src={photo4} alt='projet' />

          <div className='project__infos'>
            <h3 className='project__title'>Snap page d'accueil</h3>
            <p className='project__description'>
              {' '}
              Ce projet a été réalisé avec Javascript et le framework Bulma
            </p>
            <a
              href='https://single-page-responsive.netlify.app/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='button'>Voir le projet</button>
            </a>{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
