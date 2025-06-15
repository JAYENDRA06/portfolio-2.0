import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const projects: Project[] = [
  {
    title: "StrangerHub",
    description: "A social media platform for connecting with strangers.",
    content: "A social media platform that allows users to connect with strangers and friends and engage in real-time conversations. It features user profiles, chat functionality, and friend requests. The platform is built with Next.js, Socket.io for managing rooms in real-time and Prisma for database management. It also integrates AgoraRTM RTC for video calls and chatting and uses Auth.js for authentication.",
    link: "https://strgr-hub.vercel.app/",
    imgSrc: "/strgrhub.png",
    tags: ["Next.js", "Socket.io", "Prisma", "Tailwind CSS", "TypeScript", "Express.js", "MongoDB", "AgoraRTM RTC", "Auth.js"],
    github: "https://github.com/orgs/stranger-hub/repositories",
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
