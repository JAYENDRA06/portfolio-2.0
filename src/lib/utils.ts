import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Experience, Project } from "./types";
import { Code2Icon, FigmaIcon, FileCode, GithubIcon, LinkedinIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const experiences: Experience[] = [
  {
    company: "Fareportal",
    location: "Gurugram",
    details: [
      {
        position: "Software Developer",
        startDate: "July 2024",
        endDate: "Present",
        description: "Migrated landing pages data preparation backend from <u>Next.js to Go</u> for ~10% of total traffic, <u>reducing average page rendering time</u> of those pages by <u>40%</u> and lowering server costs by <u>~20%</u>. Migrated landing pages frontend to <u>Next.js v15</u>. Designed and implemented multi-language URLs and templates for Spanish and French pages, increasing SEO traffic by <u>~5%</u>. Built <u>CMS 2.0 admin UI and API</u> to manage landing pages. Rewrote older Admin API using an <u>MVC architecture</u> and an object-oriented structure. Implemented dependency injection while rewriting the API, effectively eliminating memory leaks. Reduced API latency for critical endpoints by an average of <u>2 seconds</u> through optimized queries and promise handling. <u>Reduced approx. 1,000 lines of code</u> across the admin UI and API by applying modular design principles. Technologies used: Next.js, Express.js, ASP.NET, RabbitMQ, Redis, MongoDB, MSSQL.",
      },
      {
        position: "SDE Intern",
        startDate: "Jan 2024",
        endDate: "July 2024",
        description: "Initiated development of CMS 2.0 Admin UI and API focusing on automating the process of page creation and management. Delivered features like template and component creation while keeping track of history in git. Streamlined the process of adding components in templates with grapesjs. ",
      },
    ],
    techStack: ["Next.js", ".NET", "Express.js", "ASP.NET", "RabbitMQ", "Redis", "MongoDB", "MS SQL"]
  },
  {
    company: "SKILLSCAN Edtech India Pvt. Ltd. (Geeks Of Gurukul)",
    location: "Remote",
    details: [
      {
        position: "Web Development Intern",
        startDate: "May 2023",
        endDate: "July 2023",
        description: "I successfully designed and implemented a full-fledged <u>Learning Management System (LMS)</u> alongside the organization’s official website. As part of the initiative, I led the development of version 4 of the official website. I also redesigned the LMS platform, which resulted in an <u>average 3-second reduction in load time</u>, significantly enhancing performance and user satisfaction.",
      },
    ],
    techStack: ["React.js", "Express.js", "Tailwind CSS", "DaisyUI", "Firebase", "AWS"]
  }
]

export const skils = [
  "Go lang",
  "Next.js",
  "React.js",
  "Node.js",
  "Express.js",
  "ASP.NET",
  "C++",
  "MongoDB",
  "SQL",
  "Full Stack Development",
  "UI/UX Design",
  "Version Control (Git)",
  "Problem Solving",
];

export const resumeLink = "https://drive.google.com/file/d/1A7mFl4HZzNbXfBDyntVRwkSVLYO_eZCD/view?usp=drive_link";
export const contactEmail = "jayendraawasthi0609@gmail.com";
export const githubLink = "https://github.com/JAYENDRA06";
export const linkedinLink = "https://www.linkedin.com/in/jayendra-awasthi-938152213/";
export const figmaLink = "https://www.figma.com/@Jayendra";
export const leetcodeLink = "https://leetcode.com/u/Jayendra06";

export const socialLinks = [
  {
    name: "GitHub",
    url: githubLink,
    icon: GithubIcon
  },
  {
    name: "LinkedIn",
    url: linkedinLink,
    icon: LinkedinIcon
  },
  {
    name: "LeetCode",
    url: leetcodeLink,
    icon: Code2Icon
  },
  {
    name: "Figma",
    url: figmaLink,
    icon: FigmaIcon
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/21938579/jayendra-awasthi",
    icon: FileCode
  }
]

export const projects: Project[] = [
  {
    title: "StrangerHub",
    description: "A social media platform for connecting with strangers.",
    content: "A social media platform that allows users to connect with strangers and friends and engage in real-time conversations. It features user profiles, chat functionality, and friend requests. The platform is built with Next.js, Socket.io for managing rooms in real-time and Prisma for database management. It also integrates AgoraRTM RTC for video calls and chatting and uses Auth.js for authentication.",
    link: "https://strgr-hub.vercel.app/",
    imgSrc: "/strgrhub.png",
    tags: ["Next.js", "Socket.io", "Prisma", "Tailwind CSS", "TypeScript", "Express.js", "MongoDB", "AgoraRTM RTC", "Auth.js"],
    github: "https://github.com/orgs/stranger-hub/repositories",
  },
  {
    title: "The Honest Ingredient",
    description: "An e-commerce platform for spices and herbs.",
    content: "This was a freelace project for a client that me and my friend worked upon. The Honest Ingredient is an e-commerce platform that specializes in selling spices and herbs. It features a user-friendly interface, product listings, and a shopping cart. The platform is built with Next.js, Prisma for database management, and Tailwind CSS for styling. It also integrates Stripe for payment processing and uses Auth.js for authentication.",
    disclaimer: "The original thifood.com was taken down by the client, so the link is not available anymore. A demo link is provided.",
    link: "https://thi-dev.vercel.app/",
    imgSrc: "/thi.png",
    tags: ["Next.js", "Prisma", "Tailwind CSS", "TypeScript", "Express.js", "MongoDB", "Stripe", "Auth.js", "AWS S3", "AWS EC2", "AWS Amplify", "AWS Route53"],
    github: "https://github.com/orgs/The-Honest-Ingredients-Org/repositories"
  },
  {
    title: "Doc-Udi",
    description: "A QR-based healthcare management system.",
    content: "This was a hackathon team project involving development of a web and mobile app. I worked on the design and Next.js web app for this project. The mobile app was developed for patients and web app for doctors. Doc-Udi is a QR-based healthcare management system that allows patients to schedule and start appointments by scanning a unique QR code for each doctor. It enables doctors to access patients' previous medical records once the QR code is scanned, facilitating comprehensive and informed healthcare. The system is designed to store new prescriptions securely on the cloud for easy retrieval and management.",
    link: "https://www.figma.com/community/file/1517137813043787296",
    disclaimer: "The project isn't deployed, figma and github links are provided for the application overview.",
    imgSrc: "/docudi1.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/orgs/DOC-UDI/repositories"
  },
  {
    title: "No Excuses",
    description: "A fitness app that suggests meals and exercises based on user inputs.",
    content: "This was a hackathon group project. I worked on the design and node.js backend for this project. No Excuses is a fitness app that suggests meals and exercises based on user inputs of their daily routine and intakes. The app uses an ML model to predict the work-life balance score, which is used to decide the diet and exercise plans. It features a user-friendly interface, meal suggestions, and exercise recommendations. The app is built with Flutter for mobile development and uses Node.js and python for backend services.",
    link: "https://www.figma.com/community/file/1189563184858801530/no-excuses",
    disclaimer: "The project isn't deployed, figma and github links are provided for the application overview.",
    imgSrc: "/noexcuses1.png",
    tags: ["Flutter", "Node.js", "Python", "MongoDB", "Express.js"],
    github: "https://github.com/Cypher-Dawgs"
  }
]

export const randomMovieRecommendation = [
  "The Dark Knight Rises",
  "Inception",
  "Catch Me If You Can",
  "Shutter Island",
  "Interstellar",
  "The Shawshank Redemption",
  "The Game",
  "Leon: The Professional",
  "Only The Brave",
  "The Prestige",
  "The Godfather",
  "The Dark Knight",
  "Forrest Gump",
  "Fight Club",
  "Fractured",
  "Parasite",
  "Seven",
  "Green Book",
  "Green Mile",
  "The Departed",
  "Nightcrawler",
  "Prisoners",
  "Zodiac",
  "Donnie Darko",
  "The Wolf of Wall Street",
  "Django Unchained",
  "The Aviator",
  "The Social Network",
  "The Silence of the Lambs",
  "The Usual Suspects",
  "Memento",
  "The Sixth Sense",
  "The Matrix",
  "Pulp Fiction",
  "Gladiator",
  "The Town",
  "No Country for Old Men",
  "Brothers",
  "Passengers",
  "American Psycho",
  "The Truman Show",
  "A Beautiful Mind",
  "Good Will Hunting",
  "The Intouchables",
  "Amélie",
  "La La Land",
  "Whiplash",
  "The Grand Budapest Hotel",
  "The Shape of Water",
  "Birdman",
  "The Revenant",
  "Mad Max: Fury Road",
  "Blade Runner 2049",
  "Arrival",
  "Ex Machina",
  "Her",
  "Get Out",
  "Us",
  "A Quiet Place",
  "It Follows",
  "The Babadook",
  "The Witch",
  "Hereditary",
  "Midsommar",
  "The Lighthouse",
];


export function getYearsOfExperience() {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}
