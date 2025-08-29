import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rodrigo Silva - Backend Developer & Data Specialist Portfolio",
  description:
    "Backend Developer specializing in data infrastructure, SQL, REST APIs, Docker, AWS, and cloud technologies. Experience at MEO, CEDIS, Johnson & Johnson, and WEG. Based in Lisbon, Portugal.",
  keywords: [
    "Backend Developer",
    "Data Specialist",
    "SQL Developer",
    "REST API Developer",
    "Docker Engineer",
    "AWS Developer",
    "Node.js Developer",
    "Java Developer",
    "Database Developer",
    "Infrastructure Engineer",
    "System Integration",
    "Cloud Technologies",
    "Portugal",
    "Lisbon",
    "MEO",
    "CEDIS",
    "Johnson & Johnson",
    "WEG"
  ],
  authors: [{ name: "Rodrigo Silva" }],
  creator: "Rodrigo Silva",
  publisher: "Rodrigo Silva",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rodrigo-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rodrigo Silva - Backend Developer & Data Specialist",
    description: "Backend Developer specializing in data infrastructure, SQL, REST APIs, Docker, AWS, and cloud technologies. Experience at MEO, CEDIS, Johnson & Johnson, and WEG.",
    url: "https://rodrigo-portfolio.vercel.app",
    siteName: "Rodrigo Silva Portfolio",
    images: [
      {
        url: "/images/portfolio-sample.png",
        width: 1200,
        height: 630,
        alt: "Rodrigo Silva - Backend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodrigo Silva - Backend Developer & Data Specialist",
    description: "Backend Developer specializing in data infrastructure, SQL, REST APIs, Docker, AWS, and cloud technologies.",
    images: ["/images/portfolio-sample.png"],
    creator: "@rodrigosilva",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="color-scheme" content="dark" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.linkedin.com" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional meta tags for backend/tech focus */}
        <meta name="application-name" content="Rodrigo Silva Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Rodrigo Portfolio" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rodrigo Silva",
              "jobTitle": "Backend Developer & Data Specialist",
              "description": "Backend Developer specializing in data infrastructure, SQL, REST APIs, Docker, AWS, and cloud technologies.",
              "url": "https://rodrigo-portfolio.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/rodrigo-hipolito1/"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "MEO",
                  "jobTitle": "Technical Specialist – Infrastructure and Data"
                },
                {
                  "@type": "Organization", 
                  "name": "CEDIS",
                  "jobTitle": "Software Developer (CRM & Databases)"
                },
                {
                  "@type": "Organization",
                  "name": "Johnson & Johnson",
                  "jobTitle": "Software Analyst – Manufacturing Systems"
                }
              ],
              "knowsAbout": [
                "SQL", "REST APIs", "Docker", "AWS", "Node.js", "React", "TypeScript", "Git", "Java"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lisbon",
                "addressCountry": "PT"
              }
            })
          }}
        />
        
        <style>{`
:root {
  --font-sans: "Geist", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
html { font-family: var(--font-sans); }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
