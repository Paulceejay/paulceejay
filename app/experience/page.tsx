import { Container } from "@/components/container";
import { experience } from "@/data/skills";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata = {
  title: "Experience",
  description: "Professional journey and career milestones of Chinedu Paul.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 min-h-screen">
      <Container className="pb-24">
        <div className="max-w-3xl space-y-6 mb-20 text-balance">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-gradient">
            Journey
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A timeline of my professional career, focusing on my contributions
            to high-growth startups and my journey as an independent engineer.
          </p>
        </div>

        <div className="relative space-y-20">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border hidden md:block" />

          {experience.map((item, index) => (
            <div
              key={item.company}
              className="relative flex flex-col md:flex-row gap-8 md:gap-16"
            >
              {/* Logo / Dot */}
              <div className="shrink-0 z-10">
                <div className="h-20 w-20 rounded-3xl border bg-card flex flex-center shadow-xl shadow-primary/5 group hover:border-primary/50 transition-all card-hover">
                  <span className="text-2xl font-bold text-primary">
                    {item.company[0]}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight">
                      {item.role}
                    </h2>
                    <p className="text-lg font-bold text-primary">
                      {item.company}
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-muted text-xs font-bold uppercase tracking-widest text-muted-foreground self-start md:self-center">
                    {item.duration}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {item.description}
                </p>

                {/* Visual Flair / Placeholder for accomplishments */}
                <div className="grid gap-4 sm:grid-cols-2 pt-4">
                  <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
                    <p className="text-sm font-bold text-foreground">
                      Key Contribution
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Led the architectural shift to Next.js App Router,
                      improving LCP by 40%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
