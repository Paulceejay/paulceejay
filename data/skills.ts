import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const skills = [
  { name: "React", icon: "atom", category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", icon: "layers", category: "Frontend", color: "#000000" },
  {
    name: "TypeScript",
    icon: "code-2",
    category: "Frontend",
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    icon: "palette",
    category: "Frontend",
    color: "#06B6D4",
  },
  {
    name: "React Native",
    icon: "smartphone",
    category: "Mobile",
    color: "#61DAFB",
  },
  { name: "Expo", icon: "zap", category: "Mobile", color: "#000020" },
  { name: "Redux", icon: "box", category: "Frontend", color: "#764ABC" },
  {
    name: "Zustand",
    icon: "component",
    category: "Frontend",
    color: "#433929",
  },
  { name: "Firebase", icon: "flame", category: "Backend", color: "#FFCA28" },
  { name: "Node.js", icon: "server", category: "Backend", color: "#339933" },
  { name: "Git", icon: "git-branch", category: "Tools", color: "#F05032" },
  { name: "Figma", icon: "figma", category: "Tools", color: "#F24E1E" },
];

export const projects = [
  {
    title: "Growthlobby Agency",
    description:
      "A high-performance agency website built with Next.js and Framer Motion.",
    image: "/projects/growthlobby.png",
    tags: ["Next.js", "Tailwind CSS", "Motion"],
    live: "https://growthlobby.io",
    github: "#",
    category: "Web",
    featured: true,
  },
  {
    title: "Ventlio Inventory",
    description:
      "Offline-first smart business software for African enterprises.",
    image: "/projects/ventlio.png",
    tags: ["React Native", "SQLite", "Expo"],
    live: "#",
    github: "#",
    category: "Mobile",
    featured: true,
  },
  {
    title: "Rendl Social",
    description: "A social network for meaningful connections and friendship.",
    image: "/projects/rendl.png",
    tags: ["React", "Firebase", "TypeScript"],
    live: "#",
    github: "#",
    category: "Web",
    featured: true,
  },
];

export const experience = [
  {
    company: "Stancebridge",
    role: "Senior Frontend Engineer",
    duration: "2023 - Present",
    description:
      "Architecting scalable web applications and leading the frontend team.",
    logo: "/logos/stancebridge.png",
  },
  {
    company: "Freelance",
    role: "Mobile/App Developer",
    duration: "2021 - 2023",
    description:
      "Built and deployed multiple production-ready mobile apps using React Native.",
    logo: "/logos/freelance.png",
  },
];
