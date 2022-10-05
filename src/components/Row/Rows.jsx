import React from 'react';
import './Rows.scss';
import git from './git-icon.png';

// import photo1 from './advice.png';

const Rows = ({ title, description, photo, link }) => {
  return (
    <>
      <div className='project__container'>
        <img src={photo} alt='capture du projet' />
        <div className='project__informations'>
          <h4 className='project__informations-title'>{title}</h4>
          <p className='project__informations-description'>{description}</p>
          <a href={link} target='_blank' rel='noreferrer'>
            <button className='button'>Voir le projet</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Rows;
