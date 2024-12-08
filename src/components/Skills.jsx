import React from 'react'
import csharp from '../assets/csharp.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import java from "../assets/java.png"
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import sql from '../assets/sql.png'
import typescript from '../assets/typescript.png'
import dotnet from '../assets/dotnet.png'
import javaspring from '../assets/javaspring.png'
import flask from '../assets/flask.png'
import electron from '../assets/electron.jpg'
import firebase from '../assets/firebase.png'
import angular from "../assets/angular.png"
import git from '../assets/git.png'
import pandas from '../assets/pandas.png'
import opencv from '../assets/opencv.png'
import tailwindcss from '../assets/tailwindcss.png'
import docker from "../assets/docker.png"
import entityframework from "../assets/entityframework.png"
import reactImage from "../assets/react.png"
import reactnative from "../assets/reactnative.png"
import mysql from "../assets/mysql.png"
import sqlserver from "../assets/sqlserver.png"
import nodejs from "../assets/nodejs.png"
import postgres from "../assets/postgres.png"
export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
      Skills
    </h1>
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Languages</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img src={csharp} alt="C#" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">C#</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={css} alt="CSS" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={html} alt="HTML" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={java} alt="Java" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Java</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={javascript} alt="JavaScript" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={python} alt="Python" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={sql} alt="SQL" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">SQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={typescript} alt="TypeScript" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">TypeScript</p>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Frameworks/Libraries/Runtimes</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img src={dotnet} alt=".NET" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">.NET</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={angular} alt="Angular" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Angular</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={reactImage} alt="React" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">React</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={reactnative} alt="React Native" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">React Native</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={javaspring} alt="Spring Boot" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Java Spring</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={entityframework} alt="Entity Framework" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Entity Framework</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={electron} alt="Electron" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Electron</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={flask} alt="Flask" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Flask</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={nodejs} alt="Node.js" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={opencv} alt="OpenCV" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">OpenCV</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={pandas} alt="Pandas" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Pandas</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={tailwindcss} alt="Tailwind CSS" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Tailwind CSS</p>
        </div>
      </div>
    </div>

   
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Developer Tools</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img src={docker} alt="Docker" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Docker</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={git} alt="Git" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Git</p>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Databases</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img src={postgres} alt="PostgreSQL" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={sqlserver} alt="SQL Server" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">SQL Server</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={mysql} alt="MySQL" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={firebase} alt="Firebase" className="h-16 w-16 mb-2" />
          <p className="text-sm text-gray-600">Firebase</p>
        </div>
       
      </div>
    </div>
  </div>
</section>
  )
}


