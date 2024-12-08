import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-10">
  <div className="container mx-auto px-6 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
      Experience
    </h1>

  
    <div className="mb-10">
      <h2 className="text-xl font-bold text-gray-700">
        Software Engineer Intern - Calgary, Alberta, Canada
      </h2>
      <a
        href="https://www.ripplegroup.ca"
        target="_blank"
        className="text-blue-600 font-semibold"
      >
        Ripple Group 
      </a>
      
      <p className="text-gray-500">May 2023 - August 2024</p>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        <li> <span className='font-bold'>Tech stack </span>: .NET, Angular, C#, CSS, Entity Framework, HTML, Git, Microsoft SQL Server, TypeScript.</li>
        <li>Mainly worked on<a href="https://www.izzyplatform.com"target="_blank" className="text-blue-600 font-semibold"> Izzy Platform.</a></li>
        <li>Developed both backend and frontend components for case management and call helpline web applications used
        by 22+ nonprofit organizations.</li>
        <li>Created a C# program to periodically synchronize data between a Microsoft Access database and a Microsoft SQL
        Server database, successfully securing a key client by meeting their requirements.</li>
        <li>Implemented browser-based calling for the call helpline application, handling 1,000+ calls per month.</li>
        <li>Developed a new phone call routing system for the call helpline application, reducing response times by 25%.</li>
      </ul>
    </div>

  



  </div>
</section>
  )
}
