import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";

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
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Chinedu Paul for collaborations.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen">
      <Container className="pb-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6 text-balance">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-gradient">
                Let&apos;s talk.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind? Looking for a new developer to join your
                team? Or just want to say hi? I&apos;m always open to new
                opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={siteConfig.links.email}
                className="group flex items-center gap-4 p-6 rounded-2xl border bg-card hover:border-primary/50 transition-all card-hover"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-lg font-bold">paulchinedu717@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                {[
                  {
                    icon: Github,
                    href: siteConfig.links.github,
                    label: "Github",
                  },
                  {
                    icon: Linkedin,
                    href: siteConfig.links.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: XIcon,
                    href: siteConfig.links.x,
                    label: "X",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex flex-center p-4 rounded-xl border bg-card hover:border-primary/50 transition-all card-hover"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-8 sm:p-12 shadow-2xl shadow-primary/5">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <input
                    className="w-full bg-muted/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Chinedu Paul"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input
                    className="w-full bg-muted/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="paulchinedu717@gmail.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Subject
                </label>
                <input
                  className="w-full bg-muted/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-muted/50 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all card-hover shadow-xl shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
