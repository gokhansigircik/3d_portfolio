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
    title: "Frontend Architecture",
    icon: web,
  },
  {
    title: "Full Stack Systems",
    icon: backend,
  },
  {
    title: "Business Workflow Thinking",
    icon: creator,
  },
  {
    title: "Product Focused UX",
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
    title: "Operations Manager",
    company_name: "Four Seasons",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2013 - August 2022",
    points: [
      "Supervised teams of 100+ associates in a high volume luxury resort operation.",
      "Prepared operational reports, coordinated with engineering, IT, sales, marketing, payroll, and operations teams.",
      "Built the ownership habits that now shape his software work: calm debugging, clear handoffs, and service focused execution.",
    ],
  },
  {
    title: "Lead Full Stack Developer",
    company_name: "Fundacao Casa de Mateus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Leads full stack development with React, Next.js, Python, FastAPI, PostgreSQL, data modeling, reusable components, and API connected pages.",
      "Turns foundation workflows into a scalable web based platform with product judgment, backend routes, and structured information flow.",
      "Owns remote engineering execution across planning, testing, debugging, iteration, and professional communication.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Upwork",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022 - August 2024",
    points: [
      "Delivered full stack web applications across frontend, backend, database work, API integration, testing, debugging, and deployment ready execution.",
      "Built the C.A.M.P.S registration platform with React, Java Spring Boot, and MySQL.",
      "Worked on business workflows, structured data handling, dashboards, registration systems, financial style calculations, and process automation.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Cashflows",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2022 - November 2023",
    points: [
      "Built a property investment analytics platform with Python, Flask, Jinja2, and MySQL.",
      "Modeled property input, rental income, expenses, cash flow calculation, and investment decision support.",
      "Owned backend development, database design, frontend templates, form handling, testing, debugging, and product improvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Gokhan connects software execution with business judgment: requirements, architecture, data, interface, backend, testing, and usability.",
    name: "Engineering profile",
    designation: "Full Stack Software Developer",
    company: "Business workflow software",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "The strongest projects prove practical workflow ownership: registration, property analysis, recipe records, travel discovery, and portfolio presentation.",
    name: "Project theme",
    designation: "Data driven web applications",
    company: "Selected work",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=256&q=80",
  },
  {
    testimonial:
      "The public GitHub surface is focused around six hiring projects with clearer README files, stronger descriptions, and a consistent software engineering story.",
    name: "GitHub strategy",
    designation: "Job hunting surface",
    company: "Six pinned repos",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=256&q=80",
  },
];

const projects = [
  {
    name: "C.A.M.P.S",
    description:
      "Registration and operations platform built with React, Spring Boot, and MySQL for activities, users, schedules, records, and checkout flow.",
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
      "Property investment analytics workflow with Flask, Jinja2, and MySQL for rental income, expenses, cash flow, and decision support.",
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
      "API connected React interface for maps, places, restaurants, hotels, attractions, and location based browsing.",
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
