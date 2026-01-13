"use client";

import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
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

export function Footer() {
  return (
    <footer className="relative border-t bg-muted/30 dark:bg-card/30 pt-16 pb-8 overflow-hidden">
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
            <p className="max-w-xs text-muted-foreground leading-relaxed">
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
                    className="text-muted-foreground hover:text-primary transition-colors"
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
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" /> Github
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={siteConfig.links.x}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <XIcon className="h-4 w-4" /> X
              </a>
              <a
                href={siteConfig.links.email}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Built with ❤️
            in Nigeria.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
