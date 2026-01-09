"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                I am a results-driven Frontend & Mobile Engineer with a passion
                for building scalable and maintainable applications. With a
                strong foundation in modern web and mobile technologies, I focus
                on delivering high-quality code and exceptional user
                experiences.
              </p>
              <p>
                My journey in software development began with a curiosity about
                how things work on the web, which evolved into a career
                dedicated to mastering the latest tools and frameworks. I pride
                myself on my ability to bridge the gap between complex technical
                requirements and elegant, intuitive interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-2xl bg-muted"
          >
            {/* Image placeholder or actual image */}
            <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-muted-foreground/20">
              Paul's Photo
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
