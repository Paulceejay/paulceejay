import { Container } from "@/components/container"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
  title: "Work",
  description: "A showcase of my recent frontend and mobile projects.",
}

export default function WorkPage() {
  return (
    <div className="pt-32 min-h-screen">
      <Container className="pb-24">
        <div className="max-w-3xl space-y-6 mb-20">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-gradient">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated selection of my professional work and personal experiments, ranging from 
            complex web applications to high-performance mobile apps.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project as any} />
          ))}
        </div>
      </Container>
    </div>
  )
}
