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
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Frontend",
    icon: web,
  },
  {
    title: "Full Stack Workflows",
    icon: backend,
  },
  {
    title: "Operations Mindset",
    icon: creator,
  },
  {
    title: "Customer Focused UX",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Hospitality Operations",
    company_name: "Customer service and team leadership",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Pre software career",
    points: [
      "Built service, communication, and team coordination habits in high pressure guest facing environments.",
      "Learned to diagnose friction quickly, prioritize customer trust, and keep workflows clear under pressure.",
      "Brought an operations mindset into software projects focused on scheduling, dashboards, forms, and customer experience.",
    ],
  },
  {
    title: "Full Stack Developer Training",
    company_name: "Project based software development",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Career transition",
    points: [
      "Built React, Flask, Spring Boot, and MySQL projects across authentication, CRUD workflows, APIs, and dashboards.",
      "Practiced product thinking through hospitality adjacent projects such as camp operations, travel discovery, recipes, and property tracking.",
      "Organized public work around fewer stronger repositories with clear README files, setup steps, and improvement roadmaps.",
    ],
  },
  {
    title: "Frontend Portfolio Work",
    company_name: "React, Vite, Three.js, Tailwind",
    icon: shopify,
    iconBg: "#383E56",
    date: "Current focus",
    points: [
      "Uses modern frontend tooling to create polished public portfolio experiences.",
      "Focuses on responsive layouts, reusable components, motion, 3D presentation, and clear recruiter friendly storytelling.",
      "Keeps project copy aligned with the hospitality to software narrative.",
    ],
  },
  {
    title: "Backend Fundamentals",
    company_name: "Flask, Spring Boot, MySQL",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Current focus",
    points: [
      "Implements models, controllers, services, repositories, authentication, validation, sessions, and database backed workflows.",
      "Documents setup paths, environment variables, and next improvements so projects are easier to review and extend.",
      "Builds practical apps around real business workflows instead of isolated exercises.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Gokhan's hospitality background shows up in how he thinks about users, details, and operational clarity.",
    name: "Career focus",
    designation: "Full stack developer",
    company: "Hospitality to software",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "The strongest projects are practical workflows: camp operations, property cash flow, recipes, travel discovery, and portfolio systems.",
    name: "Project theme",
    designation: "Product minded engineering",
    company: "Operations software",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "The public GitHub surface is being sharpened around fewer repositories with stronger documentation, setup, and product framing.",
    name: "GitHub strategy",
    designation: "Portfolio polish",
    company: "Selected work",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=80",
  },
];

const projects = [
  {
    name: "C.A.M.P.S",
    description:
      "Camp operations platform with React, Spring Boot, MySQL, activity management, registration, scheduling, and checkout flow thinking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gokhansigircik/C.A.M.P.S",
  },
  {
    name: "Cash Flow Properties",
    description:
      "Flask and MySQL property workflow for creating, editing, viewing, and comparing investment opportunities through a dashboard.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/gokhansigircik/cash_flow_properties",
  },
  {
    name: "Travel Advisor",
    description:
      "React travel discovery app using maps, place cards, and location based browsing for restaurants, hotels, and attractions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "maps",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/gokhansigircik/travel_advisor",
  },
];

export { services, technologies, experiences, testimonials, projects };
