"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Container } from "@/components/container";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30">
      <Container>
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60">
            Technical Expertise
          </h2>
          <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
            Skills & <br /> Technologies
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, index) => {
            // Dynamic icon resolution
            const Icon =
              (LucideIcons as any)[
                skill.icon
                  .split("-")
                  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                  .join("")
              ] || LucideIcons.Code2;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center gap-6 p-8 rounded-[2rem] border bg-card hover:border-primary/50 transition-all card-hover text-center"
              >
                <div
                  className="p-5 rounded-2xl bg-muted/50 group-hover:scale-110 transition-all duration-300"
                  style={{ color: (skill as any).color }}
                >
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 transition-transform group-hover:rotate-12" />
                </div>
                <div>
                  <span className="text-base font-bold tracking-tight">
                    {skill.name}
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.category}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
