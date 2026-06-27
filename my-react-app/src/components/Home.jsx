import React from 'react';

function Home() {
  return (
    <div className="home-content">
      <div className="home-text">
        <h1>Hi, I'm <span className="highlight">ASHISH KUMAR</span></h1>
        <p>Welcome to my professional portfolio website.</p>
        <a href="#contact" className="btn">Work With Me</a>
      </div>
      <div className="home-image-container">
    
        <img 
          src="1.jpg" 
          alt="Profile" 
          className="round-image" 
        />
      </div>
    </div>
  );
}

export default Home;