import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"

export default function Page() {
  const projects = [
    {
      title: "Currency Converter",
      subtitle: "JavaScript React",
      imageSrc: "/images/project-1.webp",
      tags: ["React", "JavaScript", "API"],
      href: "https://firstcurrencyconverter.netlify.app",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Login",
      subtitle: "HTML, CSS, Javascript",
      imageSrc: "/images/project-2.webp",
      tags: ["HTML", "CSS", "JavaScript"],
      href: "https://loginmodern.netlify.app",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Catalogo Netflix",
      subtitle: "Javascript, React",
      imageSrc: "/images/project-3.webp",
      tags: ["React", "Bootstrap", "JavaScript"],
      href: "https://catalogoflix.netlify.app",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[700px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">rodrigo</div>
                  <div className="h-2 w-2 rounded-full bg-white/60" aria-hidden="true" />
                </div>

                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["Backend Developer", "& Data Specialist"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Rodrigo is a Backend Developer based in Lisbon, Portugal. with experience in data infrastructure,
                  system integration, and scalable backend solutions.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link 
                    href="https://www.linkedin.com/in/rodrigo-hipolito-silva/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm">LinkedIn</span>
                  </Link>
                  
                  <Link 
                    href="mailto:rodrigohsilvaa@gmail.com"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                    </svg>
                    <span className="text-sm">Email</span>
                  </Link>
                  
                  <Link 
                    href="tel:+351937913836"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-sm">+351 937 913 836</span>
                  </Link>
                  
                  <Link 
                    href="/RodrigoSilva_CV.pdf"
                    target="_blank"
                    download="Rodrigo_Silva_CV.pdf"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-5 4h10v-2H7v2z"/>
                    </svg>
                    <span className="text-sm">Download CV</span>
                  </Link>
                </div>

                <div className="mt-10">
                  <p className="mb-4 text-xs font-semibold tracking-widest text-white/50">EXPERIENCE</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        Technical Specialist – Infrastructure and Data
                      </h3>
                      <p className="text-xs text-white/60">MEO • Mar 2023 - Present • Lisbon</p>
                      <p className="mt-1 text-xs text-white/50">
                        Led data structure initiatives using SQL, REST APIs, Docker and AWS
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Software Developer (CRM & Databases)</h3>
                      <p className="text-xs text-white/60">CEDIS • Dec 2022 - Mar 2023 • Lisbon</p>
                      <p className="mt-1 text-xs text-white/50">Maintained SQL Server databases and web applications</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Software Analyst – Manufacturing Systems</h3>
                      <p className="text-xs text-white/60">Johnson & Johnson • May 2022 - Dec 2022 • São Paulo</p>
                      <p className="mt-1 text-xs text-white/50">
                        Supported Manufacturing Execution System (MES) projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">TECHNICAL SKILLS</p>
                  <div className="flex flex-wrap gap-2">
                    {["SQL", "REST APIs", "Docker", "AWS", "Node.js", "React", "TypeScript", "Git", "Java"].map(
                      (skill) => (
                        <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">LANGUAGES</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-white">Portuguese</span>
                      <span className="text-xs text-white/60">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-white">English</span>
                      <span className="text-xs text-white/60">Professional</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">EDUCATION</p>
                  <div>
                    <h3 className="text-sm font-semibold text-white">BSc. Systems Development</h3>
                    <p className="text-xs text-white/60">Estácio de Sá University • 2022 • Brazil</p>
                    <p className="text-xs text-white/50">GPA: 3.3</p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">COMPANIES I'VE WORKED WITH</p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-lg font-black text-white/25">
                    <li>MEO</li>
                    <li>CEDIS</li>
                    <li>Johnson & Johnson</li>
                    <li>WEG</li>
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                imageSrc={p.imageSrc}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
