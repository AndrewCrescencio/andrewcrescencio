import Head from "next/head";

import { getReadmeMd } from "@/services/get-readme-md";
import { request } from "../services/datocms";

import { GithubReadme } from "@/components/GithubReadme";
import { Experiences } from "@/components/Experiences";
import { EXPERIENCES_QUERY } from "@/graphql/queries/experiences";

export default function Index({ data, cmsData }) {
  return (
    <>
      <Head>
        <title>Andrew Crescencio</title>
      </Head>
      <GithubReadme markdown={data} />
      <Experiences data={cmsData} />
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
