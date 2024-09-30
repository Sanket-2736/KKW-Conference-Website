import React, { useState, useEffect } from 'react';
import kkwHome from '../../assets/kkw-home.jpg';
import './Home.css';
import About from '../../components/About/About';

function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile view based on window width
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <>
      <div className='home'>
        <img src={kkwHome} alt="" />
        <div className="home-content">
          {isMobile ? (
            <>
              <h2 className='red main-heading'>International Conference on</h2>
              <h1 className='submain-heading'>Engineering Innovations for Sustainable Future</h1>
            </>
          ) : (
            <div className="content-left">
              <h2 className='red main-heading'>International Conference on</h2>
              <h1>Engineering Innovations for Sustainable Future</h1>
              <p>(ICEISF 2025)</p>
              <p>06th January & 7th January 2025</p>
              <h4>
                  K. K. Wagh Institute of Engineering Education & Research, Nashik – 422 003, (M.S.), India 
              </h4>
              <a href="http://engg.kkwagh.edu.in">Visit Website</a>
            </div>
          )}
        </div>
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
}

export default Home;
