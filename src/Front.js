import React, { useEffect } from 'react';
import './style.css';
import img2 from './images/noise3.avif';
import woman from './images/woman.png';
import name from './images/JON_DOE.png';
function Front() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const womanImg = document.querySelector('.woman-img');
      if (!womanImg) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const tiltX = ((clientX / innerWidth) - 0.5) * 40; // 40 degrees max
      const tiltY = ((clientY / innerHeight) - 0.5) * 40;

      womanImg.style.transform = `translate(-50%, -50%) rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="main">
        <img className="name-logo" src={name} alt="Logo" />
        <div className="white">
          <div className='logos'>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
        <div className="noise">
          <img className="img-noise" src={img2} alt="" />
          <div className="content">
            <h1>Web Developer</h1>
            <h2>Jane Doe</h2>
            <p>
              There wasn't a bird in the sky, but that was not what caught her
              attention. It was the clouds. The deep green that isn't the color
              of clouds, but came with these. She knew what was coming and she
              hoped she was prepared.
            </p>
            <div className="links">
              <a href="#contact" className="btn">Contact</a>
              <a href="#cv" className="btn">Download CV</a>
            </div>
          </div>
        </div>
        <img className="woman-img" src={woman} alt="woman" />
      </div>
    </div>
  );
}
export default Front;
