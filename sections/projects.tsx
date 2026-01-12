"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { projects } from "@/data/skills";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60">
            Portfolio
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
            Selected Projects
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project as any} />
          ))}
        </div>
      </Container>
    </section>
  );
}
