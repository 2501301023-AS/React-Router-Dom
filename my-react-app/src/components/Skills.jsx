import React from 'react';
const Skills = () => {
  const coreSkills = [
    {
     
      title: "Frontend Development",
      description: "Crafting fully interactive, pixel-perfect user interfaces using HTML5, CSS3, JavaScript, and modern UI frameworks."
    },
    {
    
      title: "Backend Development",
      description: "Architecting reliable application engines, building performant RESTful APIs, and implementing strict security policies."
    },
    {
   
      title: "Database Management",
      description: "Designing structured schemas, optimizing complex queries, and managing relational and non-relational storage layers."
    },
    {
     
      title: "Responsive Systems",
      description: "Engineering fluid, adaptive interfaces that render gorgeously across desktop displays, tablets, and mobile smartphones."
    }
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">Core <span className="cyan-text">Expertise</span></h2>
      <p className="skills-subtitle">Broad functional domains that I focus on delivering professionally.</p>
      
      <div className="skills-grid">
        {coreSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-wrapper">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;