import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Title from '../../components/Title/Title';
import './Projects.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rows from '../../components/Row/Rows';
import photo1 from './mdb.png';
import photo2 from './advice.png';
import photo3 from './converter.png';
import photo4 from './form.png';
import photo5 from './snap.png';
import photo6 from './atelier-rc.png';

SwiperCore.use([Navigation, Pagination]);

const Projects = () => {
  const data = [
    {
      id: 1,
      title: `MovieDB Netflix Clone`,
      description: `
      Ce projet a été réalisé avec React et le framework Tailwind. Pour l'inscription et les favoris j'ai utilisé la plateforme Firebase. J'ai utilisé l'API MovieDB pour leur base de données. 
    `,
      link: `https://moviedb-netflix-clone.netlify.app/`,
      photo: photo1,
    },
    {
      id: 6,
      title: `AtelierRc`,
      description: `
      Site vitrine d'un architecte d'intérieur, avec back-office pour la gestion de ses projets et articles. Créé avec React-Redux, Materialize côté front et Node-Js, postgreSQL / SQL, JWT,Bcrypt, Multer pour l'API. 
    `,
      link: `http://www.salleanthony.fr:8082/projets`,
      photo: photo6,
    },
    {
      id: 2,
      title: 'Advice Generator',
      description: `Ce projet a été réalisé avec du CSS et Javascript pour faire le
      lien avec l'API AdviceSlip. Il s'agit d'un générateur de conseils.`,
      link: `https://myadvice-generator.netlify.app/`,
      photo: photo2,
    },
    {
      id: 3,
      title: 'Converter',
      description: `Ce projet a été réalisé avec React et Sass. Il s'agit d'un
      convertisseur de devises totalement dynamique avec une barre de recherche intégrée.`,
      link: `https://converter-with-react.netlify.app/`,
      photo: photo3,
    },
    {
      id: 4,
      title: `Formulaire d'inscription`,
      description: `Ce projet a été réalisé en pur CSS, avec une utilisation du BEM dans un soucis de clareté du code
      totale.`,
      link: `https://static-signup-form.netlify.app/`,
      photo: photo4,
    },
    {
      id: 5,
      title: `Snap page d'accueil`,
      description: `
      Ce projet a été réalisé avec Javascript et le framework Bulma. Celui-ci m'a permis d'appréhender la navbar de façon efficace et responsive pour un résultat fluide.
    `,
      link: `https://single-page-responsive.netlify.app/`,
      photo: photo5,
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
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
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
