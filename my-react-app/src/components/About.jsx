import React from 'react';
import './About.css'; 

const About = () => {
  const skills = [
    'JavaScript (ES6+)', 'React.js', 'Next.js', 
    'Node.js', 'CSS3 / HTML5', 'Git & GitHub', 
    'SQL & NoSQL', 'Python'
  ];

  return (
    <section className="about-section">
      <div className="about-container">
    
        <div className="title-wrapper">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-grid">
          
 
          <div className="profile-card">
            <div className="image-container">
              
              <img 
                src="1.jpg" 
                alt="Your Name" 
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
            <h3 className="profile-name">ASHISH KUMAR</h3>
            <p className="profile-subtitle">Web Developer & Student</p>
          </div>

          <div className="info-container">
            
            <div className="info-box main-bio">
              <h3>Who I Am</h3>
              <p>
                Hi there! I'm a passionate <span>Web Developer</span> currently balancing my time between building clean, interactive web applications and finishing my studies. I love turning complex problems into elegant, user-friendly digital experiences.
              </p>
              <p>
                Being a student keeps me curious, driven, and constantly adapting to new tech stacks. I thrive where academic logic meets creative frontend design.
              </p>
            </div>

            <div className="info-box skills-box">
              <h3>My Toolkit</h3>
              <ul className="skills-grid">
                {skills.map((skill, index) => (
                  <li key={index} className="skill-tag">
                    <span className="bullet">✦</span> {skill}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;