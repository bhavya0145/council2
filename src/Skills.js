import React from 'react';
import head from './images/head.png'; // Path to your heading image

const skills = [
  { name: 'JavaScript', img: 'path_to_js_photo' },
  { name: 'Figma', img: 'path_to_figma_photo' },
  { name: 'React', img: 'path_to_react_photo' },
  { name: 'HTML', img: 'path_to_html_photo' },
  { name: 'CSS', img: 'path_to_css_photo' },
  { name: 'Tailwind', img: 'path_to_tailwind_photo' },
];

function Skills() {
  return (
    <div className="skills-section">
      <div className="brown-paper-background">
        <div className="heading-container">
          <img src={head} alt="Heading" className="heading-image" />
        </div>
        <div className="skills-animation">
          <div className="skills-track">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <img src={skill.img} alt={skill.name} className="skill-image" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
            {skills.map((skill, index) => (
              <div className="skill-card" key={`duplicate-${index}`}>
                <img src={skill.img} alt={skill.name} className="skill-image" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
