"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "experiencia", label: "EXPERIENCE" },
  { id: "projetos", label: "PROJECTS" },
  { id: "stack", label: "STACK" },
  { id: "educacao", label: "EDUCATION" },
  { id: "contato", label: "CONTACT" },
]

export default function SiteNav() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const order = sections.map((s) => s.id)
    const visible = new Set<string>()

    const pickActive = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
      if (nearBottom) {
        setActive(order[order.length - 1])
        return
      }
      const first = order.find((id) => visible.has(id))
      if (first) setActive(first)
      else if (window.scrollY < 80) setActive("")
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        pickActive()
      },
      // active zone: below the nav down to the upper half of the viewport
      { rootMargin: "-64px 0px -50% 0px", threshold: 0 }
    )

    for (const id of order) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    window.addEventListener("scroll", pickActive, { passive: true })
    pickActive()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", pickActive)
    }
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 border-b border-hairline backdrop-blur-md"
      style={{ background: "color-mix(in srgb, var(--surface) 78%, transparent)" }}
    >
      <div className="mx-auto flex h-14 max-w-[760px] items-center justify-between gap-6 px-6">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue text-sm font-bold tracking-tight text-canvas"
          role="img"
          aria-label="Rodrigo Silva"
        >
          RS
        </span>

        <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={[
                "relative py-1 font-mono text-xs tracking-[0.15em] transition-colors",
                active === section.id ? "text-blue" : "text-ink-soft hover:text-ink",
              ].join(" ")}
            >
              {section.label}
              <span
                className={[
                  "absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-blue transition-opacity",
                  active === section.id ? "opacity-100" : "opacity-0",
                ].join(" ")}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
