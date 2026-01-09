"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="bg-muted/50 py-20 md:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            I specialize in a variety of modern technologies to build
            high-performance web and mobile applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border bg-background p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold capitalize tracking-tight">
                {category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {skill}
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
