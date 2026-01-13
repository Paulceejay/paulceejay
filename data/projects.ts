export interface IProject {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  featured?: boolean;
}

export const projects: IProject[] = [
  {
    title: "Portfolio v1",
    description:
      "My first personal portfolio website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://paulceejay.vercel.app",
    github: "https://github.com/paulceejay/paulceejay",
    featured: true,
  },
  // Add more projects as needed
];
