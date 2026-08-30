import Head from "next/head";

import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { companies, projects, skills, profile, education } from "@/data";

export default function Index() {
  return (
    <>
      <Head>
        <title>Andrew Crescencio</title>
        <link rel="canonical" href="https://www.andrewcrescencio.com/" />
        <meta property="og:url" content="https://www.andrewcrescencio.com/" />
        <meta name="og:site_name" content="AndrewCrescencio.com" />
        <meta
          name="og:title"
          content="Andrew Crescencio - Engenheiro de Software"
        />
        <meta name="description" content={profile.summary} />
        <meta
          property="og:image"
          content="https://www.andrewcrescencio.com/api/og"
        />
        <meta name="author" content="Andrew Crescencio" />
        <meta name="og:type" content="website" />
      </Head>
      <Hero />
      <Experience companies={companies} projects={projects} />
      <Education items={education} />
      <Skills groups={skills} />
    </>
  );
}