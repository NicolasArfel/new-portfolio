import React from 'react';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <Title title={'Contact'} />
        <div className='contact__section'>
          <section className='contact__infos'>
            <p>Tel : 06 99 73 74 27</p>
            <p>Email : nicolasarfel@gmail.com</p>
            <p>Loc. : Bordeaux</p>
          </section>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
