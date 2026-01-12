"use client";

import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t bg-primary text-primary-foreground pt-16 pb-8 overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[100px] -z-10" />

      <Container>
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-2 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tighter"
            >
              {siteConfig.username}
              <span className="h-2 w-2 rounded-full bg-secondary" />
            </Link>
            <p className="max-w-xs text-primary-foreground/70 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary text-balance">
              Get in touch
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Github className="h-4 w-4" /> Github
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Twitter className="h-4 w-4" /> Twitter
              </a>
              <a
                href={siteConfig.links.email}
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with ❤️
            in Nigeria.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-sm font-bold text-primary-foreground/70 hover:text-secondary transition-colors"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
