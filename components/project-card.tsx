"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { IProject } from "@/data/projects";

interface ProjectCardProps {
  project: IProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border bg-background p-6 transition-all hover:shadow-lg"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-muted-foreground grow">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-primary/5 px-2 py-0.5 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
