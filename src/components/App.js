import React from 'react';
import Project from './Project';

const projects = [
  {
    name: 'Project 1',
    description: 'This is the description for Project 1',
  },
  {
    name: 'Project 2',
    description: 'This is the description for Project 2',
  },
  {
    name: 'Project 3',
    description: 'This is the description for Project 3',
  },
];

const App = () => {
  return (
    <div id="main">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default App;
