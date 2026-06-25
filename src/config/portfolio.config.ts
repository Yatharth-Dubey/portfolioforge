import heroImage from "../assets/profile.jpg";
import aboutImage from "../assets/profile1.jpeg";

export const portfolio = {
  profile: {
    name: "Yatharth Dubey",
    role: "Aspiring Software Engineer & Problem Solver",
    degree: "B.Tech in Computer Science Engineering",
    title: "Building scalable web apps & exploring full-stack development",
    description:
      "B.Tech student passionate about building modern web apps.",

    location: "India",
    email: "your@email.com",

    availability: "Open for Internships & Freelance",
    resumeName: "Resume.pdf",

    socials: {
      github: "https://github.com/Yatharth-Dubey",
      linkedin: "https://linkedin.com/in/yourprofile",
    },

    images: {
      hero: heroImage,
      about: aboutImage,
    },
  },

  hero: {
    badge: "Welcome to my portfolio",
    projects: "9+",
    passion: "Building UI",
  },

  contact: {
    emailjs: {
      service: "",
      template: "",
      publicKey: "",
    },
  },

  stats: [
    {
      value: "9+",
      label: "Worked On Projects",
    },
    {
      value: "6449",
      label: "CodeVita Rank",
    },
    {
      value: "8.74",
      label: "Current SGPA",
    },
  ],
  highlights: [
    {
      text: "Example achievement",
      category: "achievement",
    },
  ],

  skills: [
    "React", "JavaScript", "Python", "C/C++", "TypeScript", 
    "Node.js", "Express.js", 
    "MongoDB", "MySQL", "Google OAuth", "WebRTC",
    "JWT Auth", "REST APIs",
    "HTML", "CSS", "EmailJs",
    "Git & GitHub(active open-source usage)", "PostMan", "Docker", "Vercel", "Linux", "Windows"
  ],

  experience: [
    {
      role: "Full Stack Intern",
      company: "Company Name",

      duration: "Internship",

      points: [
        "Worked on production features",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech Computer Science",

      institution: "University",

      year: "2023–Present",

      details: "Current CGPA",
    },
  ],

  journey: [
    {
      title: "Started Coding",

      year: "2023",

      description: "Journey started",
    },
  ],
  projects: [
    {
        id: 1,
        title: "EduTrack — Learning Management Platform",
        description:
        "Full-stack platform for course management, dashboards, authentication, and analytics.",

        image: [],

        techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "JWT",
        ],

        githubUrl: "#",
        liveUrl: "#",

        category: "Full Stack",

        featured: true,
    },

    {
        id: 2,
        title: "TaskFlow — Productivity Dashboard",

        description:
        "Task and workflow management application with drag-and-drop support.",

        image: [],

        techStack: [
        "React",
        "Express",
        "MySQL",
        "REST API",
        ],

        githubUrl: "#",
        liveUrl: "#",

        category: "Web App",
    },

    {
        id: 3,
        title: "SocialSphere",

        description:
        "Community platform for sharing content and connecting with others.",

        image: [],

        techStack: [
        "React",
        "MongoDB",
        "Node.js",
        "Socket.IO",
        ],

        githubUrl: "#",
        liveUrl: "#",

        category: "Full Stack",
    },

    {
        id: 4,
        title: "CommercePro",

        description:
        "Responsive ecommerce website with cart, payments, and admin panel.",

        image: [],

        techStack: [
        "React",
        "Express",
        "MongoDB",
        "Stripe",
        ],

        githubUrl: "#",
        liveUrl: "#",

        category: "Ecommerce",
    },

    {
        id: 5,
        title: "Weather Insights",

        description:
        "Weather forecasting application with clean UI and API integration.",

        image: [],

        techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "API",
        ],

        githubUrl: "#",
        liveUrl: "#",

        category: "Frontend",
    },

    {
        id: 6,
        title: "DevPortfolio",

        description:
        "Modern developer portfolio template built with reusable sections.",

        image: [],

        techStack: [
        "React",
        "TypeScript",
        "Vite",
        ],

        githubUrl: "#",
        liveUrl: "#",

        category: "Frontend",
    },
    ],
};