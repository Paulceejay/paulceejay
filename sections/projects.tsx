"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A showcase of my recent work in web and mobile development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
