import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Row from '../../components/Row/Row';
import Title from '../../components/Title/Title';
import './Projects.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rows from '../../components/Row/Rows';
import photo1 from './advice.png';
import photo2 from './converter.png';
import photo3 from './form.png';
import photo4 from './snap.png';

const Projects = () => {
  const data = [
    {
      id: 1,
      title: 'Advice Generator',
      description: `Ce projet a été réalisé avec du CSS et Javascript pour faire le
      lien avec l'API AdviceSlip. Il s'agit d'un générateur de conseils.`,
      link: `https://myadvice-generator.netlify.app/`,
      photo: photo1,
    },
    {
      id: 2,
      title: 'Converter',
      description: `Ce projet a été réalisé avec React et Sass. Il s'agit d'un
      convertisseur de devises.`,
      link: `https://https://converter-with-react.netlify.app/-generator.netlify.app/`,
      photo: photo2,
    },
    {
      id: 3,
      title: 'Formulaire inscription',
      description: `Ce projet a été réalisé CSS dans un optique de responsivité
      totale.`,
      link: `https://static-signup-form.netlify.app/`,
      photo: photo3,
    },
    {
      id: 4,
      title: `Snap page d'accueil`,
      description: `
      Ce projet a été réalisé avec Javascript et le framework Bulma
    `,
      link: `https://single-page-responsive.netlify.app/`,
      photo: photo4,
    },
  ];

  return (
    <>
      <Title title={'Mes Projets'} />
      <div id='projets' className='projects'>
        <Swiper
          className='swiper'
          spaceBetween={0}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            930: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((project) => (
            <SwiperSlide className='swiper-slide'>
              <Rows
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                photo={project.photo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Projects;
