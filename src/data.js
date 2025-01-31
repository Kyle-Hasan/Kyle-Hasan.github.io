import calgaryTransitImage from './assets/calgary-transit.webp';
import jobFind from './assets/job-find.webp';
import budgetImage from './assets/budget-app.webp';
import budgetImage2 from './assets/budget.webp';
import jobPair1 from './assets/job-ai-answer.gif';
import jobPair2 from './assets/job-ai-interview.gif';
import jobPair3 from './assets/job-pair-login.gif';
import empathyConnect from './assets/empathy-connect.webp';
import appalyticsImage from './assets/Google-Play-Store.webp'
import interviewSenseiImage1 from './assets/interviewSensei1.webp'
import interviewSenseiImage2 from './assets/interviewSensei2.webp'
import interviewSenseiImage3 from './assets/interviewSensei3.webp'
import interviewSenseiImage4 from './assets/interviewSensei4.webp'
export const projects = [

    {
        id: 'transitSolutions',
        title: 'Transit Solutions',
        briefDescription: 'An automated system that uses machine learning to detect unauthorized vehicles in bus-only lanes and crossings. Includes a desktop application for visualizing violation data.',
        description:
            'An automated system that uses machine learning to detect unauthorized vehicles in bus-only lanes and crossings. Includes a desktop application made using Electron.js for visualizing violations. This project was developed in collaboration with Calgary Transit for my capstone project. As a software engineering student, I also collaborated with four electrical engineering students and one other software engineering student in a team of six. Code is not shared at the request of Calgary Transit.',
        technologies: ['YOLOv8', 'Python', 'Flask', 'React', 'Electron.js', 'MySQL'],
        imageThumbnail: calgaryTransitImage,
        image: calgaryTransitImage,
        challenges:
            'I had limited knowledge of machine learning prior to this project and no experience with Electron.js or desktop application development.',
        whatILearned:
            'Gained experience with computer vision using YOLOv8, cross-platform desktop app development with Electron.js, and building Python Flask REST APIs with user-friendly frontends.',
        details:
            'The system processes videos collected during bus operations to automatically detect violations. Email notifications are sent with details such as license plate numbers, time, date, pictures, and locations. A desktop application allows users to view and organize this information. Roboflow was used to label and organize datasets.',
        gallery: [calgaryTransitImage]
    },

    {
        id: 'interviewSensei',
        title: 'Interview Sensei',
        briefDescription: 'A web application that helps users practice interviews by generating tailored AI-driven questions and providing personalized feedback.',
        description:
            'A web application designed to assist users in preparing for interviews. Users can upload resumes and job descriptions, specify the number of technical and behavioral questions, and record their answers. AI-generated feedback is provided based on the responses. The interface also allows users to view and manage past interview sessions. Used OpenAI API for text generation and whisper model for transcribing audio.',
        technologies: ['.NET', "C#", "React", 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'TypeScript', 'Entity Framework'],
        imageThumbnail: interviewSenseiImage2,
        image: interviewSenseiImage2, 
        challenges:
            'Learning to integrate AI with interview preparation workflows and implementing a seamless user interface for recording and managing interviews.',
        whatILearned:
            'Gained experience in integrating AI for practical applications, designing robust backends using .NET and PostgreSQL, and building modern, responsive user interfaces with Next.js and Tailwind CSS.',
        details:
            'The application customizes interview preparation by generating questions based on user-uploaded resumes and job descriptions. Users can record their answers and receive AI-generated feedback. The backend, built with .NET and PostgreSQL, ensures efficient data handling and scalability, while the frontend provides an intuitive and seamless user experience.',
        gallery: [interviewSenseiImage1,interviewSenseiImage2,interviewSenseiImage3,interviewSenseiImage4] ,
        video: "https://www.youtube.com/embed/VHGnC7R9G6w?si=Mx9dVHPtpnRjWoLM",
        repoLinks: [
            {
                url: "https://github.com/Kyle-Hasan/InterviewSenseiBackend",
                name: 'Backend Repo'
            },
            {
                url: "https://github.com/Kyle-Hasan/InterviewSenseiFrontend",
                name: 'Frontend Repo'
            }
        ]
    },
   

    {
        id: 'jobPair',
        title: 'JobpAIr: Smart Job Application Assistant',
        briefDescription:'A mobile-friendly web app that uses machine learning to recommend personalized job postings, autofill applications, and enhance interview skills, streamlining the job application process.',
        description:
            'A mobile-friendly web app that uses machine learning to recommend personalized job postings, autofill applications, and enhance interview skills, streamlining the job application process.',
        technologies: ['Flask', 'Python', 'React', 'Firebase'],
        imageThumbnail: jobFind,
        image: jobFind,
        challenges:
            'Managing state in React and working with the ChatGPT API and Firebase for the first time.',
        whatILearned:
            'Gained experience with React, Firebase, Flask, and the ChatGPT API.',
        details:
            'The AI is powered by ChatGPT and provides AI-enhanced mock interviews with feedback as well as AI-generated answers to job application questions.',
        gallery: [jobPair1, jobPair2, jobPair3]
    },

    {
        id: 'budgetingApp',
        title: 'Personal Finance Tracker',
        description: 'A mobile application for managing personal finances.',
        briefDescription: 'A mobile application for managing personal finances.',
        technologies: ['React Native', 'Java', 'Spring Boot', 'Expo', 'PostgreSQL'],
        imageThumbnail: budgetImage2,
        image: budgetImage2,
        challenges:
            'This was my first time developing a mobile app with React Native and Expo, which posed a challenge. It was also the first major project where I used Java with Spring Boot. ' +
            'Integrating Spring Security also presented additional challenges.',
        whatILearned:
            'Gained experience in mobile development with React Native and Expo, as well as PostgreSQL, Java, JPA, and the Spring framework.',
        details:
            'The app allows users to track budgets, accounts, and transactions, including the ability to create recurring transactions. It is secured with Spring Security and implements features like virtual scrolling. Watch the demo below for more information.',
        video: "https://www.youtube.com/embed/zWFPZSICG5w?si=tR9mVbHTM4w6Cmte",

        gallery: [
            budgetImage
        ],
        
        repoLinks: [
            {
                url: "https://github.com/Kyle-Hasan/budgetAppBackend",
                name: 'Backend Repo'
            },
            {
                url: "https://github.com/Kyle-Hasan/budgetAppFrontend",
                name: 'Frontend Repo'
            }
        ]
    },

    

    {
        id: 'empathyConnect',
        title: 'Empathy Connect',
        briefDescription: 'A social media site that allows users to sign up, log in, and join various communities.',
        description:
            'Empathy Connect allows users to sign up, log in, and join various communities. Users can create posts, comment on posts, and search for content across the platform. The application also provides features for managing user profiles and community memberships.',
        technologies: ['Python', 'Flask', 'React', 'MySQL', 'Tailwind CSS'],
        imageThumbnail: empathyConnect,
        image: empathyConnect,
        challenges: 'Integrating the backend and frontend.',
        whatILearned: '',
        details:
            'For more details and a demo video, please view <a class="blue" href="https://devpost.com/software/empathy-connect" target="_blank" rel="noopener noreferrer">here</a>.',
        gallery: [empathyConnect],
        repoLinks: [
            {
                name: 'Repo',
                url: 'https://github.com/promatty/empathy-connect'
            }
        ]
    },
    
    {
        id: 'appalytics',
        title: 'Appalytics',
        briefDescription: 'A web application that leverages machine learning to analyze user sentiment from Google Play Store feedback.',
        description:
            'Appalytics is a web application that leverages machine learning to analyze user sentiment from Google Play Store feedback. The platform provides actionable insights for app developers to enhance their applications based on user feedback.',
        technologies: ['Python', 'Flask', 'React', 'MySQL', 'Bootstrap', 'CSS', 'JavaScript'],
        imageThumbnail: appalyticsImage, 
        image: appalyticsImage, 
        challenges: 'Building seamless integration between machine learning pipelines and frontend components.',
        whatILearned:
            'Enhanced skills in designing full-stack applications, integrating machine learning models into web platforms, and deploying applications on Google Cloud.',
        details:
            'Appalytics analyzes user feedback from Google Play Store reviews, providing developers with sentiment analysis to improve their apps. Built with a full-stack approach, the platform processes data using Flask on the backend, stores it in MySQL, and visualizes insights using React and Bootstrap.',
        gallery: [], 
        repoLinks: [
            {
                name: 'Repo',
                url: 'https://github.com/aabdrakmanov/frontend-seng401' 
            }
        ]
    }
    
];
