import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.scss';

const Form = () => {
  const form = useRef();

  // emailjs configuration
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message envoyé');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Nom' required />
        <input type='email' name='email' placeholder='Email' required />
        <textarea
          name='message'
          placeholder='Votre Message'
          required
        ></textarea>
        <button>Envoyer</button>
      </form>
    </>
  );
};

export default Form;
