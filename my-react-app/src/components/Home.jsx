import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is </p>
          <h1 className="hero-name">ASHISH KUMAR</h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I build high-performance, responsive web applications with modern design principles. 
            Turning complex problems into clean, functional code is my specialty.
          </p>
          
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Work 
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/2501301023-AS" target="_blank" rel="noreferrer" className="social-icon"><Github /></a>
            <a href="https://www.linkedin.com/in/ashishkumar2008/" target="_blank" rel="noreferrer" className="social-icon"><Linkedin /></a>
            <a href="mailto:ASHISHKUMAR21@GMAIL.com" className="social-icon"></a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-border-glow">
           
            <img 
              src="1(1).jpg" 
              alt="Profile" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;