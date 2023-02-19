import Head from "next/head";

import { GithubReadme } from "@/components/sections/GithubReadme";
import { Experience } from "@/components/sections/Experience";
import { getReadmeMd } from "@/services/get-readme-md";
import { EXPERIENCES_QUERY } from "@/graphql/queries/experiences";
import { request } from "@/services/datocms";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";

export default function Index({ data, cmsData }) {
  return (
    <>
      <Head>
        <title>Andrew Crescencio</title>
        <link rel="canonical" href="https://www.andrewcrescencio.com/" />
        <meta property="og:url" content="https://www.andrewcrescencio.com/" />
        <meta name="og:site_name" content="AndrewCrescencio.com" />
        <meta name="og:title" content="Andrew Crescencio" />
        <meta
          name="description"
          content="Resolvendo problemas com o poder da tecnologia"
        />
        <meta
          property="og:image"
          content="https://www.andrewcrescencio.com/api/og"
        />
        <meta name="author" content="Andrew Crescencio" />
        <meta name="og:type" content="website" />
      </Head>
      <Hero />
      <Intro />
      <Experience experience={cmsData.experience} />
      <GithubReadme markdown={data} />
    </>
  );
}

export const getStaticProps = async () => {
  let data = null;
  let cmsData = null;
  try {
    data = await getReadmeMd();
    cmsData = await await request({
      query: EXPERIENCES_QUERY,
    });
  } catch (e) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      cmsData,
    },
    revalidate: 24 * 60 * 60,
  };
};
