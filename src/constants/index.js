import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  snssquare,
  hrm,
  task,
  instagram,
  trendycart,
  student,
  nextjs,
  crewai,
  database,
  fastapi,
  gemini,
  huggingface,
  langchain,
  langgraph,
  openai,
  postgresql,
  socketio,
  vscode,
  postman,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Generative AI Developer",
    icon: backend,
  },
  {
    title: "AI Agents Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Socket.io",
    icon: socketio,
  },
];

const experiences = [
  {
    title: "Software Associate",
    company_name: "SNS Square Consultancy Services Pvt Ltd",
    icon: snssquare,
    iconBg: "#383E56",
    date: "Mar 2023 - Dec 2023",
    points: [
      "Trained and contributed to full-stack development projects in an Agile environment.",
      "Built responsive front-ends using React.js, HTML5, CSS3, and JavaScript with focus on user experience.",
      "Developed backend services with Node.js and Express, and integrated MongoDB databases for scalable solutions.",
      "Participated in daily stand-ups, sprint planning, and peer reviews to ensure collaborative development.",
      "Ensured performance and usability through rigorous testing and optimization practices.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "SNS Square Consultancy Services Pvt Ltd",
    icon: snssquare,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developed scalable full-stack applications using the MERN stack with emphasis on performance and maintainability.",
      "Built reusable UI components with React and Tailwind CSS to ensure consistency across applications.",
      "Designed and integrated RESTful APIs and real-time features using Node.js, Express, and Socket.io.",
      "Integrated GenAI capabilities including behavioral analysis, AI career redirection mentor, and predictive insights using LLMs, LangChain, and LangGraph.",
      "Collaborated with cross-functional teams in an Agile environment to deliver high-quality, production-ready solutions.",
    ],
  },
];

const testimonials = [
  {
    degree: "Bachelor of Engineering",
    institution: "SNS College of Engineering",
    duration: "Aug 2019 - May 2023",
    cgpa: "8.6",
    location: "Coimbatore - 641035",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=300&fit=crop&crop=center",
    achievements: [
      "Electronics and Communication Engineering",
      "Strong foundation in engineering principles",
      "Developed analytical and problem-solving skills",
      "Participated in technical projects and collaborative learning"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Class 12th",
    institution: "Namakkal Kongu Matric Higher Secondary School",
    duration: "June 2017 - Mar 2019",
    cgpa: null,
    location: "Namakkal, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=300&fit=crop&crop=center",
    achievements: [
      "Completed Higher Secondary Education",
      "Built strong academic foundation",
      "Prepared for engineering entrance examinations",
      "Developed discipline and time management skills"
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC) - Class 10th",
    institution: "Namakkal Kongu Matric Higher Secondary School",
    duration: "June 2016 - Mar 2017",
    cgpa: null,
    location: "Namakkal, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=300&fit=crop&crop=center",
    achievements: [
      "Completed Secondary School Education",
      "Strong academic performance",
      "Active participation in school activities",
      "Foundation for higher secondary studies"
    ]
  }
];

const projects = [
  {
    name: "HR Management Tool",
    description:
      "Built a scalable HRM platform with comprehensive modules including Payroll, Attendance, and Performance management. Features RESTful APIs for complex data operations and real-time notifications using Socket.io for seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: hrm,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Student Hiring Tool",
    description:
      "Developed a multi-agent AI system to analyze student rejection patterns using resumes and behavioral data. Integrated LLMs for tone/confidence evaluation and implemented RAG architecture with WeaviateDB for context-aware feedback.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "fastapi",
        color: "pink-text-gradient",
      },
      {
        name: "gemini",
        color: "blue-text-gradient",
      },
      {
        name: "weaviate",
        color: "green-text-gradient",
      },
    ],
    image: student,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Task Management Tool",
    description:
      "Engineered a real-time task management platform with live task creation, assignment, and tracking using Socket.io. Features global state management with Redux Toolkit and optimized MongoDB schema for efficient relational data handling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: task,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Trendy Shop | E-commerce Web Application",
    description:
      "Developed a complete e-commerce solution with product listing, advanced filtering, cart management, and checkout modules. Applied Redux Toolkit for state management including cart state, user sessions, and form handling with focus on performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "css3",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
    ],
    image: trendycart,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Instagram UI Clone",
    description:
      "Reconstructed Instagram's front-end layout using React with pixel-perfect accuracy. Developed dynamic components including post grid, story carousel, and profile view with responsive design and reusable component architecture.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: instagram,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
