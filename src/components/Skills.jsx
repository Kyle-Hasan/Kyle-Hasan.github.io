import React from 'react'

import dotnet from '../assets/dotnet.webp'

import entityframework from "../assets/entityframework.webp"

import expo from '../assets/expo.webp'

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-5">
  <div className="container mx-auto px-20 text-center">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
      Skills
    </h1>
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Languages</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" className="h-16 w-16 mb-2" />
          <p loading="lazy" className="text-sm text-gray-600">C#</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="h-16 w-16 mb-2" />
          <p  className="text-sm text-gray-600">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Java" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">TypeScript</p>
        </div>
        
        
      </div>
    </div>

    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 break-words">Frameworks / Libraries / Runtimes</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img loading="lazy" src={dotnet} alt=".NET" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">.NET</p>
        </div>
        <div className="flex flex-col items-center">
        <img loading='lazy' alt='Angular' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" className="h-16 w-16 mb-2"  />
          <p className="text-sm text-gray-600">Angular</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">React</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Native" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">React Native</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Java Spring</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src={entityframework} alt="Entity Framework" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Entity Framework</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" alt="Electron" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Electron</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" alt="Flask" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Flask</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" alt="OpenCV" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">OpenCV</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Pandas</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src={expo} alt="Expo" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Expo</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Bootstrap</p>
        </div>
      </div>
    </div>

   
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Developer Tools</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Docker</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Git</p>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Databases</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="SQL Server" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">SQL Server</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Firebase</p>
        </div>
       
      </div>
    </div>
  </div>
</section>
  )
}


