import React from 'react';
import paperimg3 from './images/paper2.jpg';

function Education() {
  return (
    <div className="education-container">
      <img src={paperimg3} alt="Background" className="paper-img-edu" />
      <div className="edu-heading-container">
        <h1 className="education-heading animate">EDUCATION</h1>
        <div className="cards-container">
          <div className="card">
            <i className="fa-solid fa-user-graduate graduate-icon"></i>
            <div className="card-content">
              <h3>2007-2015</h3>
              <p>Higher Secondary Education</p>
              <p>Marble Hills Middle School</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-user-graduate graduate-icon"></i>
            <div className="card-content">
              <h3>2015-2019</h3>
              <p>Bachelor of Technology</p>
              <p>Somerset School of Science</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-user-graduate graduate-icon"></i>
            <div className="card-content">
              <h3>2019-Present</h3>
              <p>Master of Technology</p>
              <p>Hawking University, Cambridge</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;