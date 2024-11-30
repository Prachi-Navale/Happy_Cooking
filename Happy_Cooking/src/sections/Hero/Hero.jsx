import React, { useEffect, useRef } from 'react';
import './Hero.css';
import slide1 from '../../Assets/slide1.jpeg';
import slide2 from '../../Assets/slide2.jpeg';
import slide3 from '../../Assets/slide3.jpeg';
import slide4 from '../../Assets/slide4.jpeg';
import slide5 from '../../Assets/slide5.jpeg';

function Hero() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const firstChild = sliderRef.current.firstElementChild;
        sliderRef.current.appendChild(firstChild); // Move first image to the end
      }
    }, 3000); // 3 seconds for each slide
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <section className="hero-section">
      <h1>What would you like to eat?</h1>
      <div className="search-container">
        <input type="text" placeholder="Search recipe..." className="search-bar" />
        <button className="search-btn">Search</button>
      </div>
      <div className="sliding-images" ref={sliderRef}>
        <img src={slide1} alt="Image 1" />
        <img src={slide2} alt="Image 2" />
        <img src={slide3} alt="Image 3" />
        <img src={slide4} alt="Image 4" />
        <img src={slide5} alt="Image 5" />
      </div>
    </section>
  );
}

export default Hero;

