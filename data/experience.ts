export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "Current Company",
    location: "Remote",
    period: "Jan 2024 - Present",
    description: [
      "Building and maintaining scalable web applications using React and Next.js.",
      "Collaborating with designers to implement polished user interfaces.",
      "Optimizing application performance and accessibility.",
    ],
  },
  {
    title: "Mobile App Developer",
    company: "Previous Company",
    location: "Lagos, Nigeria",
    period: "June 2022 - Dec 2023",
    description: [
      "Developed cross-platform mobile applications using React Native.",
      "Integrated third-party APIs and services.",
      "Participated in code reviews and architectural discussions.",
    ],
  },
];
