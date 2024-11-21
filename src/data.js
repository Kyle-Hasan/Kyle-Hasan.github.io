
import calgaryTransitImage from './assets/calgary-transit.png'
import jobFind from './assets/job-find.png'
import budgetImage from './assets/budget-app.png'
import budgetImage2 from './assets/budget.png'
import jobPair1 from './assets/job-ai-answer.gif'
import jobPair2 from './assets/job-ai-interview.gif'
import jobPair3 from './assets/job-pair-login.gif'
import empathyConnect from './assets/empathy-connect.png'
export const projects = [
    {
      id: 'budgetingApp',
      title: 'Budgeting App',
      description: 'A mobile application for keeping track of personal finances.',
      technologies: ['React Native', 'Java','Spring Boot','Expo', 'PostgreSQL'],
      imageThumbnail: budgetImage2,
      image: budgetImage2,
      challenges:
      'This was my first time doing mobile app development with react native and expo so that was definetely a challenge. Also first big project I used java spring boot make.\n'+
      'Integrating spring security was also a challenge',
      whatILearned:
      'Learned more about mobile development, react native, expo, java and the spring framework.',
     details:
      'Allows users to keep tracks of budgets, accounts and transactions. Also allows users to create recurring transactions. Secured using spring security and implements stuff like virtual scroll. Watch demo below for more info.\n',
     video: 'https://www.youtube.com/embed/2hsucoveFRs?si=VfRwzKjRhSKtjJgO',
     gallery: [
        budgetImage
      
      ],
    repoLinks: [
        {
       url: "https://github.com/Kyle-Hasan/budgetAppBackend",
       name:"Backend Repo"
        },
        {
      url:  "https://github.com/Kyle-Hasan/budgetAppFrontend",
      name: "Frontend Repo"
        }
    ]
    },

    {
      id: 'jobPair',
      title: 'JobpAIr: Smart Job Application Assistant',
      description:
        'A mobile-friendly web app that uses machine learning to recommend personalized job postings, autofill applications, and sharpen interview skills, streamlining the job application process.',
    
      technologies: ['Flask', 'Python', 'React','Firebase'],
      imageThumbnail: jobFind,
      image:jobFind,
      challenges:
      'React state management. Also my first time working with the ChatGPT API and firebase.',
    whatILearned:
      'Gained more experience with react, firebase, flask and ChatGPT API.',
    details:
      'AI is powered by ChatGPT AI. Offers AI powered mock interviews with feedback, and AI answer enchanced for job application questions.',
      gallery: [
        jobPair1,
        jobPair2,
        jobPair3
      ]
    },

    {
      id: 'transitSolutions',
      title: 'Calgary Transit Unauthorized Vehicle Detection',
      description:
        'An automated system using machine learning to detect unauthorized vehicles in bus-only lanes and crossings, with a desktop app made using Electron.js for violation visualization. Made in collaboration with Calgary Transit for my capstone project. Code not shared at the request of Calgary Transit',
      technologies: ['YOLOv8','Python', 'Flask', 'React', 'Electron.js', 'MySQL'],
      imageThumbnail: calgaryTransitImage,
      image:calgaryTransitImage,
      challenges:
      'I was not very knowledgable about machine learning prior to this project and I had no experience with Electron.js and desktop application development.',
    whatILearned:
      'Gained experience in computer vision with YOLOv8, developing cross-platform desktop apps using Electron.js, with a python flask REST api with a user-friendly frontend.',
    details:
      'The system takes in videos collected during bus operation and automatically detects violations. Email notifications are sent containing violation information, including license plate, time. date, picture, and location. There is also a desktop application to view and organize the same information. Roboflow was used to help label and organize dataset.',
      gallery: [
        calgaryTransitImage
      ]
    },

    {
        id: 'empathyConnect',
        title: 'Empathy Connect',
        description:
          'Empathy Connect allows users to sign up, log in, and join various communities. Users can create posts, comment on posts, and search for content across the platform. The application also provides features for managing user profiles and community memberships.',
        technologies: ['Python', 'Flask', 'React', 'MySQL', 'Tailwind CSS'],
        imageThumbnail: empathyConnect,
        image:empathyConnect,
        challenges:
        'Backend and frontend integration.',
      whatILearned:
        '',
      details:
        'For more details and demo video, please view <a class="blue" href="https://devpost.com/software/empathy-connect" target="_blank" rel="noopener noreferrer">here</a>.',
        gallery: [
     
        ],
        repoLinks: [
            {
                name:"Repo",
                url: "https://github.com/promatty/empathy-connect"
            }
        ]
      },
    
    
  ];