import React from 'react';
import Row from '../../components/Row/Row';
import Title from '../../components/Title/Title';
import './Projects.scss';

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <Title title={'Mes Projets'} />
        <Row />
      </div>
    </>
  );
};

export default Projects;
