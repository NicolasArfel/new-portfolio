import React from 'react';
import Skills from '../../components/Skills/Skills';
import Title from '../../components/Title/Title';
import './About.scss';

const About = () => {
  return (
    <>
      <div className='about'>
        <Title title={'A Propos'} />
        <section>
          <h3>Bonjour! Je m'appelle Nicolas Arfel,</h3>
          <p>
            Aprés avoir passé 15 années dans la restauration, j'ai ressenti le
            besoin de faire un métier dans lequel je m'épanouirais.
          </p>
          <p>
            J'ai donc suivi une formation fullstack avec l'école de formation
            <a href='https://oclock.io/'> O'clock, </a>
            avec une spécialisation sur React, puis j'ai passé le Titre
            Professionnel de Niveau 5.
          </p>
          <p>
            Et je compte mettre à profit toutes les compétences acquises lors de
            cette reconversion, et continuer à diversifier et développer mes
            connaissances dans ce milieu professionnel si riche et diversifié.
            Je suis passionné par le cinéma, les jeux vidéos et le voyage,
            secteurs dans lesquels j'aimerais pouvoir exercer mais je suis
            également de tempérament curieux et je saisi toutes les occasions
            pour m'enrichir intellectuellement et professionnellement.
          </p>
          <p>
            Alors n'hésitez pas à me contacter si vous souhaitez que j'intègre
            vos équipes !
          </p>
        </section>
        <Skills />
      </div>
    </>
  );
};

export default About;
