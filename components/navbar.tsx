"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          {siteConfig.username}
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          {/* Mobile menu button could go here if needed */}
        </div>
      </Container>
    </header>
  );
}
