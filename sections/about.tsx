"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60">
                Introduction
              </h2>
              <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
                Engineering <br /> with Purpose.
              </h3>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Frontend & Mobile Engineer who believes that code is
                a tool for crafting experiences, not just building features.
              </p>
              <p>
                With a focus on performance, accessibility, and clean
                architecture, I help startups and established brands build
                products that scale and delight users.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-sm mx-auto w-full"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl" />
            <div className="relative h-full w-full rounded-[3rem] border-2 border-primary/20 bg-muted/50 flex flex-center">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
