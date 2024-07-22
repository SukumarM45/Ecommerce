import React from 'react';
//import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  /*const navi1 = useNavigate()
  const click1 = () =>{
    navi1("/Home")
}*/
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Our Drift</h1>
  
        <p>Discover the best deals on our wide range of products</p>
      
          <button>Shop Now</button>
        
      </div>
    </section>
  );
};

export default HeroSection;
