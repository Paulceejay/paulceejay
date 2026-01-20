"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Code2 } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
    github: string;
    category: string;
    featured?: boolean;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 card-hover"
    >
      {/* Category Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
          {project.category}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[2rem]">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <div className="w-full h-full bg-muted flex items-center justify-center">
        </div>
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
       
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8 pt-2">
        <h3 className="text-2xl font-extrabold tracking-tight mb-3">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed flex-1 mb-8 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg bg-muted text-[10px] font-bold uppercase tracking-widest"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-bold text-white transition-all card-hover"
          >
            Live Demo
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border bg-background hover:bg-muted transition-all duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
