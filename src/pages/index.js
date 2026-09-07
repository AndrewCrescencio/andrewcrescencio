import Head from "next/head";

import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { companies, projects, skills, profile, siteConfig } from "@/data";

export default function Index() {
  return (
    <>
      <Head>
        <title>{profile.name} — {profile.role}</title>
        <meta name="description" content={profile.summary} />
        <link rel="canonical" href={siteConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:title" content={`${profile.name} — ${profile.role}`} />
        <meta property="og:description" content={profile.summary} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:site_name" content={profile.name} />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} — ${profile.role}`} />
        <meta name="twitter:description" content={profile.summary} />
        <meta name="twitter:image" content={siteConfig.ogImage} />
        <meta name="author" content={profile.name} />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              jobTitle: profile.role,
              url: siteConfig.url,
              image: `${siteConfig.url}/images/andrew-crescencio.jpg`,
              sameAs: [
                profile.contacts.linkedin,
                profile.contacts.github,
              ],
              knowsAbout: [
                "Desenvolvimento Web",
                "Frontend",
                "Full Stack",
                "Vue.js",
                "Nuxt.js",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "SaaS",
                "ERP",
                "Fintech",
                "Design Systems",
                "Migração de Legado",
                "Docker",
                "CI/CD",
              ],
              description: profile.summary,
            }),
          }}
        />
      </Head>
      <Hero />
      <Experience companies={companies} projects={projects} />
      <Projects data={projects} />
      <Services />
      <Metrics />
      <Skills groups={skills} />
      <About />
      <Contact />
    </>
  );
}