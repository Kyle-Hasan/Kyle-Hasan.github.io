import React from 'react';
import { Link } from 'react-router-dom';
import calgaryTransitImage from '../assets/calgary-transit.png'
import jobFind from '../assets/job-find.png'
import budgetImage from '../assets/budget.png'
import { projects } from '../data';

const Projects = () => (
  <section id='projects' className="bg-gray-100 py-20">
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 project-card">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.imageThumbnail}
              alt={project.title}
              className="rounded-t-lg object-cover h-48 w-full"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              <Link
                to={`/projects/${project.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
