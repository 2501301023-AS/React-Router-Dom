import React from 'react';

function Projects() {
  const projects = [
    { title: 'E-Commerce Platform', desc: 'A full-stack online store with payment integration.' },
    { title: 'Task Management App', desc: 'A productivity app featuring drag-and-drop task tracking.' },
  ];

  return (
    <div className="section-container">
      <h2>Featured Projects</h2>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href="#" className="link-btn">View Code →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;