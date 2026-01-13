"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "@/assets/images/profile.jpeg";
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
                Passionate Frontend and Mobile App Developer with over 5 years
                of experience creating clean, responsive, and user-friendly
                interfaces.
              </p>
              <p>
                Experienced in building cross-platform applications across
                fintech, social media, e-commerce, and software agencies,
                delivering responsive web and mobile applications that users
                love.
              </p>
            </div>
          </motion.div>

          <div className="relative aspect-square max-w-[500px] mx-auto lg:ml-auto overflow-hidden rounded-[2.5rem] border bg-muted shadow-xl">
            <Image
              src={profilePic}
              alt="Paul Ceejay Profile"
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
