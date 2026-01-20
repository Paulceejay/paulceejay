import { StaticImageData } from "next/image";
import portfolioImg from "../assets/images/porflio.png";
import cryptoTrackerImg from "../assets/images/crypto-tracker.jpeg";
import storyTimeImg from "../assets/images/story-time.png";
import restCountriesImg from "../assets/images/rest-countries.png";
import pokemonSearchImg from "../assets/images/pokemon.png";
import taskManagerImg from "../assets/images/task-manager.png";
import rendlrImg from "../assets/images/rendlr.png";
import ventlioImg from "../assets/images/ventlio.png";
import rushbillImg from "../assets/images/rushbill.png";

export interface IProject {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string | StaticImageData;
  featured?: boolean;
  category?: string;
}

export const projects: IProject[] = [
  {
    title: "My Portfolio Website",
    image: portfolioImg,
    description:
      "My first personal portfolio website built with Next.js and Tailwind CSS, that showcase all my works and experience",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://paulceejay.vercel.app",
    github: "https://github.com/paulceejay/paulceejay",
    featured: true,
    category: "Web",
  },
  {
    title: "Rushbill",
    description:
      "A mobile payment company. We are building an ecosystem to enable people to digitally send and receive money, and creating simple financial access for everyone",
    image: rushbillImg,
    tech: [
      "React Native",
      "Expo",
      "EAS",
      "Tanstack Query",
      "Nativewind",
      "TypeScript",
    ],
    link: "https://rushbill.com",
    github: "https://rushbill.com/",
    category: "Mobile",
    featured: true,
  },
  {
    title: "Ventlio",
    description:
      "Number one Offline Inventory System in Nigeria & Africa - Your Best Shopify Alternative, Quick storefront creation platform for Nigerian businesses. Manage inventory, track sales, record expenses & create invoices - all offline-first. The smart business software trusted across Africa.",
    image: ventlioImg,
    tech: [
      "NextJs",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Native",
      "Expo",
      "EAS",
      "Tanstack Query",
      "Nativewind",
    ],
    link: "https://ventlio.com",
    github: "https://ventlio.com/",
    category: "Mobile/Web",
    featured: true,
  },
  {
    title: "Rendlr",
    description:
      "A social network that empowers you to make connections, whether you’re looking for friends, dating, or growing your professional network. It believes that healthy relationships are central to living a positive, productive life. One first move on Rendlr could change your life.",
    image: rendlrImg,
    tech: [
      "NextJs",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Native",
      "Expo",
      "EAS",
      "Tanstack Query",
      "Nativewind",
    ],
    link: "https://rendlr.com/",
    github: "https://rendlr.com/",
    category: "Web/Mobile",
    featured: true,
  },
  {
    title: "Crypto Tracker",
    image: cryptoTrackerImg,
    description:
      "A mobile app for Crypto Portfolio Tracker to track current prices of all your favourites crypto currency",
    tech: [
      "Expo",
      "React Native",
      "EAS",
      "Victory Native",
      "Tanstack Query",
      "Nativewind",
    ],
    link: "https://github.com/Paulceejay/crypto-tracker",
    github: "https://github.com/Paulceejay/crypto-tracker",
    featured: true,
    category: "Mobile",
  },
  {
    title: "Story Time",
    image: storyTimeImg,
    description: "A bed time story React Native mobile Application for kids",
    tech: [
      "Expo",
      "EAS",
      "React Native",
      "supabase",
      "Nativewind",
      "Typescript",
    ],
    link: "https://github.com/Paulceejay/story-time",
    github: "https://github.com/Paulceejay/story-time",
    featured: true,
    category: "Mobile",
  },
  {
    title: "Pokemon Search",
    image: pokemonSearchImg,
    description: "A pokemon API search app for practice",
    tech: ["Tailwind CSS", "Javascript", "Next JS", "Pokemon API"],
    link: "https://github.com/Paulceejay/pokemon-search-app",
    github: "https://pokemon-search-app-five.vercel.app",
    featured: true,
    category: "Web",
  },
  {
    title: "Task Manager",
    image: taskManagerImg,
    description: "A pokemon API search app for practice",
    tech: ["Tailwind CSS", "Javascript", "React", "CRUD", "Firebase"],
    link: "https://github.com/Paulceejay/task-manager",
    github: "https://paulceejay.github.io/task-manager",
    featured: true,
    category: "Web",
  },
  {
    title: "Rest Countries",
    image: restCountriesImg,
    description: "A Rest Countries API project for practice",
    tech: ["Tailwind CSS", "CSS", "Javascript", "Rest Countries API"],
    link: "https://paulceejay.github.io/rest-countries/",
    github: "https://github.com/Paulceejay/rest-countries",
    featured: true,
    category: "Web",
  },
];
