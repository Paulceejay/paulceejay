"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/container"
import { siteConfig } from "@/config/site"
import { Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="relative rounded-[3rem] border bg-primary p-12 md:p-24 overflow-hidden shadow-2xl shadow-primary/30">
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
              Let&apos;s Build Something
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight sm:text-7xl text-white text-balance leading-[1.1]">
              Ready to take your project to the next level?
            </h3>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed text-balance">
              Whether you have a specific project in mind or just want to chat about 
              the future of web and mobile engineering, I&apos;m only a message away.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-xl font-extrabold text-primary transition-all card-hover shadow-xl"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
              <a
                href={siteConfig.links.email}
                className="inline-flex h-16 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-10 text-xl font-bold text-white transition-all hover:bg-white/10 card-hover"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
