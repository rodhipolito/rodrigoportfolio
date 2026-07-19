import Image from "next/image"
import Link from "next/link"

import SiteNav from "@/components/site-nav"

const kpis = [
  { value: "4+", label: "years in data" },
  { value: "6+", label: "years in tech" },
  { value: "5", label: "companies" },
  { value: "17+", label: "technologies" },
  { value: "EN / PT", label: "languages" },
]

type Experience = {
  role: string
  org: string
  period: string
  location: string | null
  current: boolean
  bullets: string[]
  tags?: string[]
}

const experience: Experience[] = [
  {
    role: "Technical Specialist – Infrastructure and Data",
    org: "MEO / Altice Portugal",
    period: "Mar 2023 – Present",
    location: "Lisbon",
    current: true,
    bullets: [
      "Designed and maintained dimensional data models and Power BI / DAX dashboards, delivering consistent sales analytics across commercial teams and supporting data-driven decision-making.",
      "Built and maintained ETL pipelines in SQL Server (T-SQL, stored procedures, SQL Agent Jobs), ensuring data consistency, reliability and quality across telecom infrastructure.",
      "Migrated data pipelines from Access to SQL Server, improving scalability and reducing manual dependency on legacy systems.",
      "Automated operational data workflows using VBA, Macros and SharePoint, significantly reducing manual effort and improving process efficiency.",
      "Supported data integration initiatives across enterprise systems, contributing to improved data structure and system scalability.",
    ],
    tags: ["SharePoint", "Power BI", "PBIRS", "Excel", "Salesforce", "VBA", "Macros"],
  },
  {
    role: "Software Developer – CRM & Databases",
    org: "CEDIS",
    period: "Dec 2022 – Mar 2023",
    location: "Lisbon",
    current: false,
    bullets: [
      "Maintained and optimized SQL Server databases using SSMS, performing data corrections, quality checks and troubleshooting to ensure data integrity.",
      "Provided technical support and customization for Microsoft Dynamics CRM, ensuring data accuracy and system reliability across client organizations.",
      "Collaborated with sports centers and municipal councils on data accuracy initiatives, supporting consistent reporting and operational continuity.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Microsoft SQL Server"],
  },
  {
    role: "Software Analyst – Manufacturing Systems (MES)",
    org: "Johnson & Johnson (AS2 Group)",
    period: "May 2022 – Nov 2022",
    location: "São Paulo",
    current: false,
    bullets: [
      "Gathered and analyzed data requirements to support a Manufacturing Execution System (MES) implementation, aligning technical solutions with operational needs.",
      "Supported automation of manufacturing data flows, ensuring integration between MES and enterprise systems (ERP/APIs).",
      "Assisted in configuration and validation of MES environment, contributing to system reliability and data accuracy in a regulated manufacturing context.",
    ],
    tags: ["MES (Manufacturing Execution System)", "Microsoft SQL Server", "Power BI"],
  },
  {
    role: "Systems Support Analyst – ERP & IT Services",
    org: "Algar Tech · Outsourcing Itaú Unibanco",
    period: "Feb 2021 – May 2022 · 1 yr 4 mos",
    location: "São José dos Campos, SP · Remote",
    current: false,
    bullets: [
      "Managed and resolved incidents through ServiceNow and Salesforce, ensuring SLA compliance and consistent service delivery across enterprise operations.",
      "Executed controlled changes in SAP ERP systems (ChaRM process) across DEV and QA environments, contributing to data consistency and system stability.",
      "Collaborated with technical teams on backlog management and process improvements, supporting operational continuity.",
    ],
    tags: ["SAP", "ServiceNow", "Salesforce", "SharePoint"],
  },
  {
    role: "Service Desk Analyst",
    org: "TIVIT · Outsourcing Itaú Unibanco",
    period: "Oct 2019 – Feb 2021 · 1 yr 5 mos",
    location: "São José dos Campos Area, Brazil",
    current: false,
    bullets: [
      "Worked on the Service Desk serving Itaú Unibanco, providing technical support and customer service.",
    ],
    tags: ["ServiceNow"],
  },
]

const projects = [
  {
    title: "Fuel Prices — World vs Asia",
    desc: "Exploratory analysis of global fuel prices with Python, Streamlit and Plotly.",
    tags: ["Python", "Streamlit", "Plotly", "Kaggle"],
    href: "https://fuel-prices-wordvsasia.streamlit.app/",
    featured: true,
  },
  {
    title: "Netflix Catalog",
    desc: "Movie and TV series catalog with dynamic genre filtering.",
    tags: ["React", "Bootstrap"],
    href: "https://catalogoflix.netlify.app",
    featured: false,
  },
  {
    title: "Currency Converter",
    desc: "Real-time currency converter consuming an external exchange-rate API.",
    tags: ["React", "JavaScript", "API"],
    href: "https://firstcurrencyconverter.netlify.app",
    featured: false,
  },
  {
    title: "Financial Transaction API",
    desc: "Transactional API with JWT authentication and Entity Framework on PostgreSQL.",
    tags: ["ASP.NET Core 8", "PostgreSQL", "JWT"],
    href: "https://financial-transaction-frontend-six.vercel.app/",
    featured: false,
  },
  {
    title: "Taskly — Helpdesk",
    desc: "Ticket management platform with a .NET 8 backend and Supabase database.",
    tags: [".NET 8", "React", "Supabase"],
    href: "https://tickets-manager-api.vercel.app",
    featured: false,
  },
]

const stack = [
  { label: "Data & ETL", items: ["SQL Server", "T-SQL", "Python", "ETL Pipelines", "Dimensional Modeling"] },
  { label: "BI & Analytics", items: ["Power BI", "DAX", "VBA"] },
  { label: "Dev & Integration", items: ["ASP.NET Core", "Node.js", "TypeScript", "REST APIs", "Git"] },
  { label: "Enterprise Systems", items: ["SAP ERP", "Microsoft Dynamics CRM", "ServiceNow", "Salesforce"] },
]

const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Professional" },
]

const certifications: { name: string; href: string | null }[] = [
  {
    name: "Google Data Analytics Certificate (PT)",
    href: "https://www.coursera.org/account/accomplishments/professional-cert/7F8EGQLXUMPH",
  },
  {
    name: "Software Engineering — FIAP",
    href: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=2a36cca9009239de63d077454f70fab6&action=view",
  },
  {
    name: "Microsoft Power BI para Data Science, Versão 2.0",
    href: "https://mycourse.app/cJYkUcHqnQRdcRRg8",
  },
  {
    name: "EF English Live — EF Level 7, Intermediate (CEFR B1)",
    href: null,
  },
]

// Career sparkline: x mapped from months since Oct 2019 (0..81 → 4..752),
// y rises with each company change. One node per real milestone.
const careerMilestones = [
  { x: 4, y: 48, label: "TIVIT · Oct 2019" },
  { x: 152, y: 40, label: "Algar Tech · Feb 2021" },
  { x: 290, y: 30, label: "Johnson & Johnson · May 2022" },
  { x: 355, y: 24, label: "CEDIS · Dec 2022" },
  { x: 383, y: 16, label: "MEO / Altice Portugal · Mar 2023" },
]

const SPARK_PATH = "M4 48 L152 40 L290 30 L355 24 L383 16 L752 8"

const contactLinkClass =
  "font-mono text-[13px] text-blue underline-offset-4 transition-colors hover:text-navy hover:underline"

function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      <Link
        href="https://www.linkedin.com/in/rodrigo-hipolito-silva/"
        target="_blank"
        rel="noopener noreferrer"
        className={contactLinkClass}
      >
        LinkedIn <span aria-hidden="true">↗</span>
      </Link>
      <Link href="mailto:rodrigohsilvaa@gmail.com" className={contactLinkClass}>
        Email
      </Link>
      <Link href="tel:+351937913836" className={contactLinkClass}>
        +351 937 913 836
      </Link>
      <Link href="/RodrigoSilva_CV.pdf" target="_blank" download="Rodrigo_Silva_CV.pdf" className={contactLinkClass}>
        Download CV <span aria-hidden="true">↓</span>
      </Link>
    </div>
  )
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="shrink-0 font-mono text-[11px] font-medium tracking-[0.25em] text-ink-muted">
        <span className="text-blue">{index}</span>
        <span className="ml-3">{title}</span>
      </h2>
      <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <SiteNav />
      <div className="mx-auto max-w-[760px] px-6 pb-24 pt-10 sm:pt-14">
        {/* Hero — report header */}
        <section className="mt-10 sm:mt-14">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
            <Image
              src="/images/Profile.png"
              alt="Rodrigo Silva"
              width={92}
              height={92}
              priority
              className="fade-rise h-[92px] w-[92px] rounded-full border-2 border-blue-tint object-cover ring-1 ring-blue"
            />
            <div>
              <h1 className="fade-rise text-4xl font-bold tracking-tight text-navy sm:text-5xl [animation-delay:60ms]">
                Hi, my name is Rodrigo Silva
              </h1>
              <p className="fade-rise mt-3 font-mono text-xs font-medium tracking-[0.3em] text-blue [animation-delay:120ms]">
                DATA & ANALYTICS ENGINEER
              </p>
            </div>
          </div>
          <p className="fade-rise mt-5 max-w-[58ch] text-base leading-relaxed text-ink-soft [animation-delay:180ms]">
            Data & Analytics Engineer based in Lisbon, Portugal, with 4+ years in SQL Server, ETL pipelines,
            dimensional modeling and Power BI / DAX across telecommunications and consulting sectors.
          </p>

          <div className="fade-rise mt-6 w-fit max-w-full rounded-lg border border-hairline-blue bg-surface px-4 py-3 font-mono text-[13px] text-ink [animation-delay:210ms]">
            <span className="text-ink-soft">SELECT</span> focus <span className="text-ink-soft">FROM</span> career{" "}
            <span className="text-ink-soft">WHERE</span> profile ={" "}
            <span className="query-typewriter" aria-hidden="true" />
            <span className="sr-only">&apos;analytics engineer&apos;</span>
          </div>

          <div className="fade-rise mt-7 [animation-delay:240ms]">
            <ContactLinks />
          </div>

          {/* KPI strip — thin, report-header style */}
          <div className="fade-rise mt-10 grid grid-cols-2 border-y border-hairline sm:grid-cols-5 [animation-delay:300ms]">
            {kpis.map((kpi, i) => (
              <div
                key={kpi.label}
                className={[
                  "px-4 py-4",
                  i % 2 === 1 ? "border-l border-hairline" : "",
                  i >= 2 ? "max-sm:border-t max-sm:border-hairline" : "",
                  i > 0 ? "sm:border-l sm:border-hairline" : "",
                ].join(" ")}
              >
                <p className="font-mono text-xl font-semibold tracking-tight text-navy">{kpi.value}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">{kpi.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signature sparkline — career timeline with one node per company */}
        <div className="mt-14 sm:mt-16">
          <svg
            viewBox="0 0 760 56"
            fill="none"
            className="w-full"
            role="img"
            aria-label="Career timeline from 2019 to present: TIVIT, Algar Tech, Johnson & Johnson, CEDIS, MEO / Altice Portugal"
          >
            <defs>
              <linearGradient id="spark-fill-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--blue)" stopOpacity="0.12" />
                <stop offset="100%" stopColor="var(--blue)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="spark-fill" d={`${SPARK_PATH} L752 56 L4 56 Z`} fill="url(#spark-fill-gradient)" />
            <path
              className="spark-line"
              d={SPARK_PATH}
              stroke="var(--blue)"
              strokeWidth="1.5"
              strokeOpacity="0.55"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {careerMilestones.map((milestone) => (
              <circle
                key={milestone.label}
                className="spark-dot"
                cx={milestone.x}
                cy={milestone.y}
                r="3"
                fill="var(--blue)"
              >
                <title>{milestone.label}</title>
              </circle>
            ))}
            <circle className="spark-dot" cx="752" cy="8" r="3.5" fill="var(--blue)">
              <title>Present · MEO / Altice Portugal</title>
            </circle>
          </svg>
          <div className="mt-1.5 flex justify-between font-mono text-[10px] tracking-wider text-ink-muted">
            <span>2019</span>
            <span>PRESENT</span>
          </div>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {/* Experience — vertical timeline */}
          <section id="experiencia" className="scroll-mt-20">
            <SectionHeading index="01" title="EXPERIENCE" />
            <div className="relative">
              <span className="absolute bottom-2 left-[5px] top-2 w-px bg-hairline" aria-hidden="true" />
              <ol className="space-y-12">
                {experience.map((exp) => (
                  <li key={exp.role} className="relative pl-8">
                    {exp.current && (
                      <span className="absolute bottom-0 left-[5px] top-2 w-px bg-blue" aria-hidden="true" />
                    )}
                    <span
                      className={[
                        "absolute left-0 top-[5px] h-[11px] w-[11px] rounded-full",
                        exp.current ? "bg-blue" : "border border-ink-muted bg-surface",
                      ].join(" ")}
                      aria-hidden="true"
                    />
                    <h3 className="text-[15px] font-semibold text-ink">{exp.role}</h3>
                    <p className="mt-1 font-mono text-xs text-ink-muted">
                      {exp.org} · {exp.period}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink-soft marker:text-ink-muted">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="rounded bg-blue-tint px-2 py-0.5 font-mono text-[11px] text-navy">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Projects — technical catalog list */}
          <section id="projetos" className="scroll-mt-20">
            <SectionHeading index="02" title="PROJECTS" />
            <div className="divide-y divide-hairline border-y border-hairline">
              {projects.map((proj) => (
                <a
                  key={proj.title}
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-x-8 gap-y-3 py-5 sm:grid-cols-[minmax(0,1fr)_auto]"
                >
                  <div>
                    {proj.featured && (
                      <p className="mb-2 font-mono text-[10px] font-medium tracking-[0.25em] text-blue">
                        FEATURED · DATA VIZ
                      </p>
                    )}
                    <h3 className="text-[15px] font-semibold text-ink transition-colors group-hover:text-blue">
                      {proj.title}
                      <span
                        className="ml-2 inline-block font-mono text-xs text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-blue"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{proj.desc}</p>
                  </div>
                  <div className="flex flex-wrap items-start gap-1.5 sm:max-w-[240px] sm:justify-end sm:pt-1">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="rounded bg-blue-tint px-2 py-0.5 font-mono text-[11px] text-navy">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Stack — bordered category cards */}
          <section id="stack" className="scroll-mt-20">
            <SectionHeading index="03" title="TECH STACK" />
            <div className="grid gap-4 sm:grid-cols-2">
              {stack.map((cat) => (
                <div key={cat.label} className="rounded-lg border border-hairline-blue bg-surface p-5">
                  <p className="font-mono text-[10px] font-medium tracking-[0.25em] text-navy">
                    {cat.label.toUpperCase()}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.items.map((skill) => (
                      <span key={skill} className="rounded bg-blue-tint px-2 py-0.5 font-mono text-[11px] text-navy">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education + Languages */}
          <section id="educacao" className="scroll-mt-20">
            <SectionHeading index="04" title="EDUCATION & LANGUAGES" />
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">EDUCATION</p>
                <h3 className="mt-3 text-[15px] font-semibold text-ink">BSc. Systems Development</h3>
                <p className="mt-1 font-mono text-xs text-ink-muted">Estácio de Sá University · 2022 · Brazil</p>
                <p className="mt-1 text-sm text-ink-soft">GPA: 3.3</p>

                <p className="mt-8 font-mono text-[10px] tracking-[0.25em] text-ink-muted">CERTIFICATIONS</p>
                <ul className="mt-3 space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert.name} className="text-sm leading-relaxed">
                      {cert.href ? (
                        <a
                          href={cert.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue underline-offset-4 transition-colors hover:text-navy hover:underline"
                        >
                          {cert.name}
                          <span className="ml-1.5 font-mono text-xs" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      ) : (
                        <span className="text-ink-soft">{cert.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">LANGUAGES</p>
                <div className="mt-3 space-y-2.5">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-baseline justify-between gap-4 border-b border-hairline pb-2.5"
                    >
                      <span className="text-sm font-medium text-ink">{lang.name}</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer id="contato" className="mt-20 scroll-mt-20 border-t border-hairline pt-8 sm:mt-24">
          <p className="font-mono text-[10px] tracking-[0.25em] text-ink-muted">{"COMPANIES I'VE WORKED WITH"}</p>
          <p className="mt-2 text-sm font-medium text-ink-soft">
            MEO · CEDIS · Johnson & Johnson · WEG (via Algar Tech) · Itaú Unibanco (via TIVIT)
          </p>
          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-4">
            <ContactLinks />
            <p className="font-mono text-[11px] text-ink-muted">Rodrigo Silva — Data & Analytics Engineer</p>
          </div>
        </footer>
      </div>
    </main>
  )
}
