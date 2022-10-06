import React from 'react';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';
import './Contact.scss';

const Contact = () => {
  return (
    <>
      <div id='contact' className='contact'>
        <Title title={'Contact'} />
        <div className='contact__section'>
          <section className='contact__infos'>
            <p>
              <span className='material-symbols-outlined'>
                phone_in_talk_watchface_indicator
              </span>{' '}
              <a href='tel:+33699737427'>06 99 73 74 27 </a>
            </p>
            <p>
              <span className='material-symbols-outlined'>mail</span>{' '}
              <a href='mailto: nicolasarfel@gmail.com'>
                nicolasarfel@gmail.com
              </a>
            </p>
            <p>
              <span className='material-symbols-outlined'>pin_drop</span>{' '}
              Bordeaux
            </p>
          </section>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
