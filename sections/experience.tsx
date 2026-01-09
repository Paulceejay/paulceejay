"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="bg-muted/50 py-20 md:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Professional experience and career highlights.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/20"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold tracking-tight">
                  {exp.title}
                </h3>
                <span className="text-sm font-medium text-primary mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-lg font-medium text-foreground mt-1">
                {exp.company} •{" "}
                <span className="text-muted-foreground text-base">
                  {exp.location}
                </span>
              </p>

              <ul className="mt-4 space-y-2 text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
