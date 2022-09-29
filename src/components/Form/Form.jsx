import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <>
      <form className='form'>
        <input type='text' placeholder='Name' required />
        <input type='email' placeholder='Email' required />
        <textarea placeholder='Votre Message' required></textarea>
        <button>Envoyer</button>
      </form>
    </>
  );
};

export default Form;
