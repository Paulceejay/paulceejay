import { Container } from "@/components/container";
import { siteConfig } from "@/config/site";
import { ArrowRight, Code2, Smartphone, Terminal, Palette } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Learn more about Chinedu Paul's background and engineering philosophy.",
};

const services = [
  {
    title: "Web Development",
    description:
      "Building scalable, high-performance web applications using modern architectures like Next.js.",
    icon: Code2,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Mobile Apps",
    description:
      "Creating native-quality mobile experiences for iOS and Android using React Native and Expo.",
    icon: Smartphone,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "UI Architect",
    description:
      "Designing and implementing robust design systems and accessible user interfaces.",
    icon: Palette,
    color: "bg-purple-500/10 text-purple-500",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 min-h-screen">
      <Container className="pb-24">
        <div className="grid gap-16 lg:grid-cols-2 items-center mb-32">
          <div className="space-y-8 text-balance">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl text-gradient leading-[0.9]">
              The Story <br /> So Far.
            </h1>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="font-bold text-foreground">Chinedu Paul</span>,
                a Frontend & Mobile Engineer based in Nigeria. I specialize in
                crafting digital products that are as functional as they are
                beautiful.
              </p>
              <p>
                My approach is rooted in the belief that great engineering
                isn&apos;t just about crossing the finish line—it&apos;s about
                the scalability, the maintainability, and most importantly, the
                user experience built along the way.
              </p>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto w-full group">
            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[80px] group-hover:bg-primary/30 transition-all duration-700" />
            <div className="relative w-full h-full rounded-[3rem] border-2 border-primary/20 bg-muted overflow-hidden flex items-center justify-center">
              <Terminal className="h-32 w-32 text-primary/30" />
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/60">
              Services
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              What I Offer
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-10 rounded-[2.5rem] border bg-card hover:border-primary/50 transition-all duration-300 card-hover"
              >
                <div
                  className={`p-5 rounded-2xl w-fit mb-8 ${service.color} transition-all group-hover:scale-110`}
                >
                  <service.icon className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-extrabold tracking-tight mb-4">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
