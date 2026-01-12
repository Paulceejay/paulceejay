import { Hero } from "@/sections/hero";
import { Skills } from "@/sections/skills";
import { Contact } from "@/sections/contact";
import { About } from "@/sections/about";
import { Container } from "@/components/container";
import { projects } from "@/data/skills";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-24 pb-20">
      <Hero />
      <About />
      <Skills />

      <section className="relative">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black tracking-tight text-gradient">
              Projects
            </h2>
            <Link
              href="/work"
              className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-colors"
            >
              View all works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project as any} />
            ))}
          </div>
        </Container>
      </section>

      <Contact />
    </div>
  );
}
