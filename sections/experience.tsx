"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { experience } from "@/data/skills";

export function Experience() {
  return (
    <section id="experience" className="bg-muted/30 py-20 md:py-32">
      <Container>
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60">
            Career
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
            Professional Journey
          </h3>
        </div>

        <div className="relative space-y-12 max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row gap-8 p-8 rounded-[2rem] border bg-card hover:border-primary/50 transition-all card-hover"
            >
              <div className="shrink-0">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex flex-center text-xl font-bold text-primary">
                  {item.company[0]}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h4 className="text-2xl font-extrabold tracking-tight">
                    {item.role}
                  </h4>
                  <span className="text-sm font-bold text-primary/60">
                    {item.duration}
                  </span>
                </div>
                <p className="text-lg font-bold text-foreground/80">
                  {item.company}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
