import React from 'react';

const Project = ({ name, description }) => {
  return (
    <div className="project">
      <h2 data-ns-test="project-name">{name}</h2>
      <p data-ns-test="project-description">{description}</p>
    </div>
  );
};

export default Project;
