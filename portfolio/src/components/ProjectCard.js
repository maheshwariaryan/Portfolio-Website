import React from 'react';

const ProjectCard = ({ title, description, image, tags, demoLink, codeLink }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {demoLink && (
            <a href={demoLink} className="btn" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt mr-2"></i> Live Demo
            </a>
          )}
          {codeLink && (
            <a href={codeLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github mr-2"></i> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;