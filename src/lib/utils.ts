import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Experience, Project } from "./types";
import { Code2Icon, FigmaIcon, FileCode, GithubIcon, LinkedinIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const experiences: Experience[] = [
  {
    company: "Fareportal India Pvt. Ltd. (CheapOair)",
    location: "Gurugram, Haryana",
    details: [
      {
        position: "Software Engineer",
        startDate: "Jan 2024",
        endDate: "Present",
        description: "Migrated CMS backend to <u>Go</u> for <u>50% of total traffic</u>, cutting page render time by <u>40%</u> and server costs by <u>20%</u>. Built a custom <u>micro-frontend system</u> to federate CSR React component bundles using CDN. Developed an in-house <u>A/B testing solution</u> for template experiments without third-party tooling. Automated bulk <u>Redis and CDN cache management</u>. Shipped multilingual (Spanish/French) template support, boosting SEO traffic by <u>2%</u>. Developed a price-hike feature for the price-alert <u>.NET microservice</u>, increasing email views and clicks. Rebuilt <u>CMS Admin (UI + API)</u> with modular architecture, cutting <u>1K+ LOC</u> and improving maintainability. Refactored legacy Express.js APIs with dependency injection and optimized queries, reducing latency by <u>~500ms</u> per critical endpoint.",
      },
    ],
    techStack: ["Go", "Next.js", "React.js", "Express.js", "ASP.NET", ".NET", "Redis", "CDN", "RabbitMQ", "MongoDB", "MS SQL"]
  },
  {
    company: "SKILLSCAN Edtech India Pvt. Ltd. (Geeks Of Gurukul)",
    location: "Remote",
    details: [
      {
        position: "Web Development Intern",
        startDate: "May 2023",
        endDate: "July 2023",
        description: "Designed and implemented the organization's <u>Learning Management System (LMS)</u> and official website. Redesigned the LMS, resulting in an <u>average 3-second reduction in load time</u>.",
      },
    ],
    techStack: ["React.js", "Express.js", "Tailwind CSS", "DaisyUI", "Firebase", "AWS"]
  }
]

export const skils = [
  "Go",
  "TypeScript",
  "C++",
  "C#",
  "Next.js",
  "React.js",
  "React Native",
  "Node.js",
  "Express.js",
  "ASP.NET",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kafka",
  "AWS",
  "Azure",
  "Cloudflare",
  "System Design",
  "Performance Optimization",
  "DSA",
];

export const resumeLink = "https://drive.google.com/file/d/1iEgzV32LGtYXwmBPjprnMl7E_qQvhMo6/view?usp=sharing";
export const contactEmail = "jayendraawasthi0609@gmail.com";
export const githubLink = "https://github.com/JAYENDRA06";
export const linkedinLink = "https://www.linkedin.com/in/jayendra06/";
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
    title: "INAZU",
    description: "A GPS ride tracker and companion app for bike and car enthusiasts.",
    content: "INAZU is a GPS ride-tracking app for bike and car enthusiasts, published on the App Store. I built the React Native/Expo client with Mapbox for live background location tracking, ride recaps, garage-linked stats, weekly and monthly progress, and ride memories with photo attachments. Social features include follow riders, user search, private profiles, and shareable profile and activity links. On the backend, I designed Go microservices for auth, activity, and email notifications with JWT auth, Redis sessions, PostgreSQL, Cloudflare R2 storage, and Kafka for email decoupling.",
    link: "https://www.inazu.app/",
    otherLinks: [
      { type: "appstore", url: "https://apps.apple.com/us/app/inazu/id6775971770" },
    ],
    imgSrc: "/inazu.png",
    tags: ["React Native", "Expo", "Mapbox", "Go", "PostgreSQL", "Redis", "Kafka", "Cloudflare R2"],
  },
  {
    title: "Geeks of Gurukul",
    description: "Official landing page and Learning Management System for an edtech platform.",
    content: "During my internship at SKILLSCAN Edtech (Geeks of Gurukul), I designed and built the organization's official website and a full Learning Management System. I led development of version 4 of the landing page and redesigned the LMS, cutting average load time by about 3 seconds. The platform supports course delivery, student management, and the company's online and offline programs in AI, ML, Web3, and more.",
    link: "https://geeksofgurukul.com/",
    imgSrc: "/geeksofgurukul.png",
    tags: ["React.js", "Express.js", "Tailwind CSS", "DaisyUI", "Firebase", "AWS"],
  },
  {
    title: "StrangerHub",
    description: "A full-stack platform for random video and text chats between strangers.",
    content: "Stranger Hub is a full-stack platform enabling random video and text chats between strangers using the Agora SDK. I implemented authentication and session management with NextAuth and Next.js middleware, and built a dedicated socket server to manage chat rooms in real time.",
    link: "https://strgr-hub.vercel.app/",
    imgSrc: "/strgrhub.png",
    tags: ["Next.js", "Agora", "Socket.io", "NextAuth", "Prisma", "MongoDB", "AWS S3"],
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
    content: "DOC-UDI applies UPI-style QR codes to healthcare, letting patients schedule and initiate appointments by scanning a doctor's unique code. Doctors can securely access patients' historical medical data upon scan for more informed diagnosis. I worked on the design and web app for this VinHack 2023 project, where our team won 2nd place and Best Design.",
    link: "https://www.figma.com/community/file/1517137813043787296",
    disclaimer: " The project isn't deployed; Figma and GitHub links are provided for the application overview.",
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
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}
