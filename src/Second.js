import React, { useState, useEffect } from 'react';
import paperimg2 from './images/paper3.jpg';
function Second() {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.heading');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setShowHeading(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main2">
      <img src={paperimg2} alt="paper-img" className="main-img" />
      <div className="head1">
        <h1 className={`heading ${showHeading ? 'animate' : ''}`}>WHO I AM?</h1>
        
        <p className='txt2'>
        My name's Jane. I'm a web designer and developer based in Southampton, UK. <br /> <br />

During the day I work as a lead developer at a local agency and in the evening I work on freelance projects and utilize the time to built my own products. <br /> I spent my leisure hours writing articles and poetry. Right now I'm also trying a hand at machine learning and AI. I love to learn and explore new arenas.
        </p>
      </div>
    </div>
  );
}

export default Second;
