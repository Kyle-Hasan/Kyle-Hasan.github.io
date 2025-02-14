import React from 'react'

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-10">
  <div className="container mx-auto px-6 flex flex-col items-center justify-center">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
      Experience
    </h1>

  
    <div className="mb-10 flex flex-col xl:w-[60%] lg:w-2/3 xl:ml-32 lg:ml-24 md:ml-8">
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
      <ul className="list-disc list-outside text-gray-600 mt-2 flex flex-col justify-center ">
        <li> <span className='font-bold'>Tech stack </span>: .NET, Angular, C#, CSS, Entity Framework, HTML, Git, Microsoft SQL Server, TypeScript.</li>
        <li>Mainly worked on<a href="https://www.izzyplatform.com"target="_blank" className="text-blue-600 font-semibold"> Izzy Platform.</a></li>
        <li>Developed both backend and frontend components as a full-stack developer for case management and call
        helpline web applications used by 22+ nonprofit organizations.</li>
        <li>Implemented an online payment and billing system using Stripe, enabling seamless invoicing and payment
        processing for 100+ counselling clients.</li>
        <li>Developed a custom C# program that periodically synchronized data between Microsoft Access and SQL Server
        databases, meeting a client's prerequisite for purchasing the company's SaaS solution.</li>
        <li>Added browser-based calling by integrating the frontend with the Twilio API, handling 75+ calls per month.</li>
        <li>Developed a Twilio API-based phone call routing system for the call helpline, reducing response times by 25%.</li>
      </ul>
    </div>

  


  </div>
</section>
  )
}
