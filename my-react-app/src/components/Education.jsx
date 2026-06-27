import React from 'react';
import './Education.css'; 

const Education = () => {
  const coreSubjects = [
    'Web Development', 'Data Structures', 'Software Engineering',
    'Algorithms', 'Database Management', 'Object-Oriented Programming'
  ];

  return (
    <section className="education-section">
      <div className="education-container">

        <div className="title-wrapper">
          <h2 className="section-title">Education</h2>
          <div className="title-underline"></div>
        </div>

      
        <div className="edu-main-card">
       
          <div className="edu-image-side">
            <div className="edu-logo-box">
            
              <img 
                src="2.png" 
                alt="Geeta University" 
                className="edu-campus-img"
              />
              <div className="edu-image-glow"></div>
            </div>
            <span className="timeline-badge">2025 - 2029</span>
          </div>

    
          <div className="edu-details-side">
            <div className="edu-header-info">
              <h3 className="degree-title">Bachelor of Technology</h3>
              <p className="major-title">Computer Science and Engineering</p>
              <h4 className="university-name">Geeta University</h4>
            </div>

            <div className="edu-divider"></div>

            <div className="edu-description">
              <p>
                Currently pursuing a comprehensive foundation in engineering principles, with an intensive academic focus on building modern web architectures, writing efficient algorithms, and applying scalable software engineering methodologies.
              </p>
            </div>

            <div className="focus-areas">
              <h5>Key Focus Areas:</h5>
              <div className="focus-grid">
                {coreSubjects.map((subject, index) => (
                  <div key={index} className="focus-tag">
                    <span className="focus-icon">⚡</span> {subject}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;