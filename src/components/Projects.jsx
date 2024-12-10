import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Projects = () => (
  <section id='projects' className="bg-gray-100 py-10">
    <div className="container mx-auto  w-2/3 h-1/4">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center ">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => (
    <div
      key={project.id}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <img
        loading="lazy"
        src={project.imageThumbnail}
        alt={project.title}
        className="rounded-t-lg object-cover h-48 w-full border-b-2 border-black"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 min-h-[56px]">
          {project.title}
        </h2>
        <p className="text-gray-600 mb-4 flex-grow min-h-[72px]">
          {project.briefDescription}
        </p>
        <p className="text-gray-500 mb-4 min-h-[40px]">
          <strong>Technologies:</strong> {project.technologies.join(', ')}
        </p>
        <div className="mt-auto">
          <Link
            to={`/projects/${project.id}`}
            className="text-blue-600 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  </section>
);

export default Projects;
