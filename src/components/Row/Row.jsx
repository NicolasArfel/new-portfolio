import React from 'react';
import './Row.scss';

const Row = () => {
  return (
    <>
      <div className='row'>
        <img className='row__image' src='#' alt='projet' />
        <div className='row__title'>
          <p>Nom du projet</p>
        </div>
      </div>
    </>
  );
};

export default Row;
