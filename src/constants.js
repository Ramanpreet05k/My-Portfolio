// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import phpLogo from './assets/tech_logo/php.png';
import tableauLogo from './assets/tech_logo/tableau.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import numpyLogo from './assets/tech_logo/numpy.png';
import edaLogo from './assets/tech_logo/eda.png';
import edunextLogo from './assets/company_logo/edunext.webp';
import raised from './assets/company_logo/raised.png';
import resumeguideLogo from './assets/work_logo/resumeguide.png';
import dashboardLogo from './assets/work_logo/dashboard.png';

import metablogLogo from './assets/work_logo/metablog.png';

import matplotlibLogo from './assets/tech_logo/matplotlib.png';
import seabornLogo from './assets/tech_logo/seaborn.png';
import excelLogo from './assets/tech_logo/excel.png';
import googlecLogo from './assets/tech_logo/googlec.png';
import jupyterLogo from './assets/tech_logo/jupyter.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import gtbitLogo from './assets/education_logo/gtbit.jpeg';
import ghpsLogo from './assets/education_logo/ghps.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'PHP', logo: phpLogo }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Google Colab', logo: googlecLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Jupyter', logo: jupyterLogo },
    ],
  },
{
  title: 'Data Analysis & Visualization',
  skills: [
    { name: 'Tableau', logo: tableauLogo },
    { name: 'Pandas', logo: pandasLogo },
    { name: 'NumPy', logo: numpyLogo },
    { name: 'EDA', logo: edaLogo },
    { name: 'Matplotlib', logo: matplotlibLogo },
    { name: 'Seaborn', logo: seabornLogo },
    { name: 'Excel', logo: excelLogo },
  ],
},
];

  export const experiences = [
    {
      id: 0,
      img: edunextLogo,
      role: "Software Engineer Intern",
      company: "Edunext Technologies",
      date: "Jan 2025 - April 2025",
      desc: "Worked on multiple school website projects, developing responsive and user-friendly interfaces, integrating dynamic features, and collaborating with the backend team to implement server-side functionalities. Contributed to live client projects, ensuring timely delivery, consistent code quality, and improved website performance through optimized component structures and cleaner code.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "PHP",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "SQL",
        "Git",
      ],
    },
    {
      id: 1,
      img: raised,
      role: "Web Developer Intern",
      company: "Raise Digital",
      date: "May 2024 - June 2024",
      desc: "Collaborated on multiple full-stack projects using MERN technology, integrating RESTful APIs for seamless frontend-backend communication, optimizing frontend performance with React hooks and React Router for smooth navigation, and implementing code splitting to enhance efficiency and maintainable code structure.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "SQL",
        "Git",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: gtbitLogo,
      school: "Guru Teg Bahadur Institute of Technology, Delhi",
      date: "Sept 2023 - Current",
      grade: "9.04 CGPA",
      desc: "I am a 3rd-year B.Tech CSE student at Guru Teg Bahadur Institute of Technology, with a strong foundation in programming, software development, and core CS principles. I have studied Data Structures, Algorithms, OOP, Databases, Web Development, and Software Engineering, and actively participate in workshops and technical events to enhance my practical skills.",
      degree: "Bachelor of Technology (Computer Science) - B.Tech",
    },
    {
      id: 1,
      img: ghpsLogo,
      school: "Guru Harkrishan Public School, Delhi",
      date: "Apr 2017 - March 2018",
      grade: "91%",
      desc: "I completed my class 12 education from Guru Harkrishan Public School, Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: ghpsLogo,
      school: "Guru Harkrishan Public School, Delhi",
      date: "Apr 2015 - March 2016",
      grade: "92%",
      desc: "I completed my class 10 education from Guru Harkrishan Public School, Delhi, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "ResumeGuide",
      description:
        "ResumeGuide is a comprehensive platform that goes beyond document creation. It features a structured Markdown resume builder with instant PDF export, integrated with real-time career trends and quizzes to ensure the user's document adheres to the latest industry best practices.",
      image: resumeguideLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "GEMINI API", "Inngest" , "Neon"],
      github: "https://github.com/Ramanpreet05k/ResumeGuide",
      webapp: "https://resume-guide-ten.vercel.app/",
    },
    {
      id: 1,
      title: "MetaBlog",
      description:
        "A modern blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). Create, edit, and share insightful blogs effortlessly with a clean UI, secure authentication, and a seamless reading and writing experience.",
      image: metablogLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ramanpreet05k/Meta_Blog",
      webapp: "",
    },
    {
      id: 2,
      title: "Data Analysis of Covid-19 Trends in India",
      description:
        "This project analyzed COVID-19 trends in India, highlighting hotspots, recovery rates, and vaccination progress. Using Python, Tableau, and Excel, it provided visual insights for resource allocation, policy monitoring, and public awareness, with scope for predictive modeling and interactive dashboards.",
      image: dashboardLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ramanpreet05k/Data-Analysis-of-Covid-19-Trends",
      webapp: "https://docs.google.com/document/d/19mCKWG2DIHJi-w1EK4e4vSbDa4Y6QA-NOBPbTSC_YH8/edit?usp=sharing",
    },
    
  ];  