import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project,setProject] = useState(projects.find(x=> id === x.id))

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Project not found.</h1>
        <Link to="/projects" className="text-blue-600 hover:underline mt-4">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-5">
       
          <div className="relative">
           
            <div className="p-6 w-full">
              <h1 className="text-3xl font-bold">{project.title}</h1>
            </div>
          </div>

        
          <div className="p-6">
          {project.description && (
    <div
      className="text-gray-600 mb-4"
      dangerouslySetInnerHTML={{ __html: project.description }}
    />
  )}
            {project.details && (
    <div
      className="text-gray-600 mb-4"
      dangerouslySetInnerHTML={{ __html: project.details }}
    />
  )}

{project.gallery && project.gallery.length > 1 && (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {project.gallery.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery item ${index + 1}`}
          className="w-full max-w-[400px] h-full object-cover rounded-lg shadow-md mx-auto"
        />
      ))}
    </div>
  </div>
)}


            {project.technologies && (
              <p className="text-gray-600 mb-4">
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
            )}

{project.video && (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Demo Video</h2>
              <div className="aspect-w-16 aspect-h-9">
              <iframe width={600} height={560}  src={project.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          )}

{project.gallery && project.gallery.length === 1 && (
  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Gallery</h2>
    <div>
      {project.gallery.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery item ${index + 1}`}
      
        />
      ))}
    </div>
  </div>
)}


            {project.challenges && (
              <p className="text-gray-800 mb-4">
                <strong>Challenges:</strong> {project.challenges}
              </p>
            )}
            {project.whatILearned && (
              <p className="text-gray-800 mb-4">
                <strong>What I Learned:</strong> {project.whatILearned}
              </p>
            )}
          </div>

          {project.repoLinks && project.repoLinks.length > 0 && (
    <div className="mt-6 ml-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">GitHub Repositories</h2>
      <ul className="list-disc list-inside space-y-2">
        {project.repoLinks.map((repo, index) => (
          <li key={index}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}

       
  


        
          
        </div>

        <div className="text-center mt-8">
          <Link
            to="/"
            className="text-blue-600 hover:underline text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;