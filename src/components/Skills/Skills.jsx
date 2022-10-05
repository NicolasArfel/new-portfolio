import React, { useEffect, useState } from 'react';
import './Skills.scss';

const Skills = () => {
  const [skill, setSkill] = useState('HTML/CSS');

  // i create the animation that makes the skills appear every 3 seconds
  useEffect(() => {
    var words = [
      'HTML/CSS',
      'SCSS',
      'JAVASCRIPT',
      'REACT',
      'REACT-REDUX',
      'NODE.JS',
      'SQL',
      'POSTGRESQL',
      'SEQUELIZE',
      'GIT',
      'FIGMA',
      'MATERIALIZE',
      'BULMA',
      'TAILWIND',
    ];
    let i = 0;
    setInterval(function () {
      setSkill(words[(i = (i + 1) % words.length)]);
    }, 3000);
  }, []);

  return (
    <div className='skills'>
      <h3 className='words'>{skill}</h3>
    </div>
  );
};

export default Skills;
