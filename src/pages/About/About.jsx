import React from 'react';
import Skills from '../../components/Skills/Skills';
import Title from '../../components/Title/Title';
import './About.scss';

const About = () => {
  return (
    <>
      <div id='about' className='about'>
        <Title title={'A Propos'} />
        <div className='about__section'>
          <section>
            <h3>Bonjour! Je m'appelle Nicolas Arfel,</h3>
            <p>
              Aprés avoir passé 15 années dans la restauration, j'ai ressenti le
              besoin de faire un métier dans lequel je m'épanouirais.
            </p>
            <p>
              J'ai donc suivi une formation fullstack avec l'école de formation
              <a href='https://oclock.io/'>O'clock,</a>
              puis j'ai passé le Titre Professionnel de Niveau 5.
            </p>
            <p>
              Je suis passionné par le cinéma, les jeux vidéos, le voyage et la
              street-food. Je suis également de tempérament curieux et je saisis
              toutes les occasions pour m'enrichir intellectuellement et
              professionnellement. Sérieux et rigoureux, j'apporte également la
              touche humour dans le groupe !
            </p>
            <p>
              Alors n'hésitez pas à me contacter si vous souhaitez que j'intègre
              vos équipes !
            </p>
          </section>
          <Skills />
        </div>
      </div>
    </>
  );
};

export default About;
