import React from 'react';
const Education = () => {
  const educationHistory = [
    {
      degree: "B.TECH CSE",
      institution: "GEETA University",
      duration: "2025 - 2029",
      description: "Specialized in distributed systems, advanced algorithms, and cloud computing infrastructure."
    },
    {
      degree: "12TH STANDARD",
      institution: "HARE KRISHNA INTERNATONAL SCHOOL",
      duration: "2024 - 2025",
      description: " Core coursework included Data Structures, Software Engineering, and Database Management Systems."
    }
  ];

  return (
    <div className="education-container">
      <h2 className="section-title">Academic <span className="cyan-text">Journey</span></h2>
      <div className="timeline">
        {educationHistory.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
         
            </div>
            <div className="timeline-content">
              <div className="timeline-date">
               
              </div>
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;