export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "Zustand",
    "Framer Motion",
    "HTML5/CSS3",
  ],
  mobile: ["React Native", "Expo", "Native Modules", "Mobile UI/UX"],
  tools: ["Git", "GitHub Actions", "Firebase", "Postman", "Figma", "Sentry"],
  core: ["Data Structures", "Algorithms", "Clean Code", "Design Patterns"],
};

export type SkillCategory = keyof typeof skills;
