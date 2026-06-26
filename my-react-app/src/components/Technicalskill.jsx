import React from 'react';
const TechnicalSkills = () => {
  const techStacks = [
    { name: "JavaScript / TypeScript", level: "90%" },
    { name: "ReactJS / Next.js", level: "85%" },
    { name: "Node.js / Express", level: "80%" },
    { name: "Python / Django", level: "70%" },
    { name: "SQL / MongoDB", level: "75%" },
    { name: "Docker & Cloud Deployments", level: "65%" }
  ];

  return (
    <div className="tech-skills-container">
      <h2 className="section-title">Technical <span className="cyan-text">Toolbox</span></h2>
      
      <div className="tech-skills-layout">
        <div className="tech-intro">
          <h3>Languages & Tools</h3>
          <p>
            Here is a concrete metric representing my familiarity and comfort tier with various engineering ecosystems. I continuously experiment with modern web primitives to ensure scalable software cycles.
          </p>
        </div>

        <div className="bars-wrapper">
          {techStacks.map((tech, index) => (
            <div key={index} className="progress-bar-group">
              <div className="bar-labels">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-level">{tech.level}</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: tech.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;