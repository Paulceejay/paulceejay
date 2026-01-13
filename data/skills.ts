import {
  Github,
  Linkedin,
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
  {
    name: "Zustand",
    icon: "component",
    category: "State Management",
    color: "#433929",
  },
  {
    name: "TanStack Query",
    icon: "database",
    category: "State Management",
    color: "#FF4154",
  },
  { name: "Firebase", icon: "flame", category: "Backend", color: "#FFCA28" },
  { name: "Supabase", icon: "database", category: "Backend", color: "#3ECF8E" },
  { name: "Appwrite", icon: "cloud", category: "Backend", color: "#F02D65" },
  {
    name: "Git & GitHub",
    icon: "git-branch",
    category: "Tools",
    color: "#F05032",
  },
  { name: "Figma", icon: "figma", category: "Tools", color: "#F24E1E" },
  { name: "EAS Build", icon: "package", category: "Tools", color: "#000020" },
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
    company: "RUSHBILL – FINTECH",
    role: "Mobile App Engineer",
    duration: "02/2024 – Present",
    description:
      "Owned the full React Native mobile app for Rushbill. Implemented deep linking, biometric authentication, and built a reusable UI component library used across the entire app.",
    logo: "/logos/rushbill.png",
  },
  {
    company: "RENDLR",
    role: "Mobile App Engineer",
    duration: "01/2023 – 03/2024",
    description:
      "Published production app to Google Play Store. Integrated Firebase services and optimized startup time by 60%. Designed in-app subscription flow and migrated to GraphQL.",
    logo: "/logos/rendlr.png",
  },
  {
    company: "Moonlightdating",
    role: "Frontend Engineer",
    duration: "01/2022 – 02/2022",
    description:
      "Redesigned landing page using Next.js, resulting in 45% sign-up conversion increase. Improved image performance by 60% and fixed critical bugs in the React Native app.",
    logo: "/logos/moonlight.png",
  },
  {
    company: "Osmaxin Developers",
    role: "Frontend Engineer / Mobile App",
    duration: "Previous",
    description:
      "Developed responsive dashboards and integrated payment gateways like Stripe and Paystack. Upgraded legacy projects to modern tech for improved performance.",
    logo: "/logos/osmaxin.png",
  },
];
