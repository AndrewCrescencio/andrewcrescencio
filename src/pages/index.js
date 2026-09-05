import Head from "next/head";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Metrics } from "@/components/sections/Metrics";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { companies, projects, profile, siteConfig } from "@/data";

export default function Index() {
  const pageTitle = `${profile.name} — ${profile.role}`;
  const pageDescription = profile.summary;
  const pageUrl = siteConfig.url;
  const ogImage = siteConfig.ogImage;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={profile.name} />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
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
      <Skills />
      <About />
      <Contact />
    </>
  );
}