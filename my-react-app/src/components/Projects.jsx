import React from 'react';



const Projects = () => {
  const projectsList = [
    {
      title: "E-Commerce Engine API",
      description: "A highly resilient cloud core hosting secure customer authentication logic, automated dynamic product inventories, and Stripe system billing hooks.",
      tags: ["Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Real-time Crypto Dashboard",
      description: "An interactive tracker listening to active WebSockets to process raw market pricing shifts instantly into beautiful visual trend graphs.",
      tags: ["React", "TypeScript", "Chart.js", "WebSockets"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "AI Semantic Search Tool",
      description: "An internal enterprise document lookup pipeline matching search queries to database archives using vector indexing solutions.",
      tags: ["Next.js", "Python", "FastAPI", "Pinecone"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">Featured <span className="cyan-text">Creations</span></h2>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" title="Source Code"></a>
                <a href={project.live} target="_blank" rel="noreferrer" title="Live Preview"></a>
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;