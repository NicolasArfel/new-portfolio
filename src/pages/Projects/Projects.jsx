import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Row from '../../components/Row/Row';
import Title from '../../components/Title/Title';
import './Projects.scss';
import 'swiper/css';

const Projects = () => {
  return (
    <>
      <div id='projets' className='projects'>
        <Title title={'Mes Projets'} />
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}
        <Row />
      </div>
    </>
  );
};

export default Projects;
