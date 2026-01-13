"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";
import { ArrowRight, Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-7xl font-black tracking-tighter sm:text-9xl lg:text-[12rem] leading-[0.8] text-balance"
          >
            Chinedu <br />
            <span className="text-primary italic">Paul</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-2xl text-xl text-muted-foreground sm:text-2xl leading-relaxed text-balance"
          >
            I&apos;m{" "}
            <span className="font-bold text-foreground">Chinedu Paul</span>. A
            passionate Frontend and Mobile App Developer dedicated to building
            high-performance, beautifully crafted digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/work"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/25 transition-all card-hover"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-primary bg-transparent px-10 text-lg font-bold text-primary transition-all hover:bg-primary hover:text-white card-hover"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 flex items-center gap-8 text-muted-foreground"
          >
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors hover:scale-125 duration-300"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors hover:scale-125 duration-300"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href={siteConfig.links.x}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors hover:scale-125 duration-300"
            >
              <XIcon className="h-7 w-7" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
