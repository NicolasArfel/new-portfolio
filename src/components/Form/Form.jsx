import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.scss';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dnzf41k',
        'template_tmrwtse',
        form.current,
        'kU-GKNH0RgXeVGUW5'
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
  };

  return (
    <>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Name' required />
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
