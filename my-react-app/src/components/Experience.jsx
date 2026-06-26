import React from 'react';
const Experience = () => {
  const experiences = [
    {
      role: "Senior Full Stack Engineer",
      company: "TechVanguard Solutions",
      duration: "2024 - Present",
      tasks: [
        "Architect and maintain high-traffic web platforms using React/Next.js and Node.js microservices.",
        "Optimized database query cycles across massive datasets, reducing overall page load times by 35%.",
        "Mentor 4 junior engineers, coordinating standard sprint architecture and regular code reviews."
      ]
    },
    {
      role: "WEB DEVELOPER AND Software Developer",
      company: "PixelPerfect Creative Labs",
      duration: "2022 - 2024",
      tasks: [
        "Engineered reliable custom state-management logic for internal administrative tools.",
        "Collaborated tightly with product designers to map fluid visual interfaces on responsive mobile viewports.",
        "Integrated extensive third-party secure payment systems and analytical reporting endpoints."
      ]
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">Professional <span className="cyan-text">History</span></h2>
      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-item">
            <div className="exp-icon">
     
            </div>
            <div className="exp-content">
              <div className="exp-date">
               
              </div>
              <h3>{exp.role}</h3>
              <h4 className="cyan-text">{exp.company}</h4>
              <ul className="exp-bullets">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;