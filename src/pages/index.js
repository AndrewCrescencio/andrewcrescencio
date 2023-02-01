import Head from "next/head";
import { getReadmeMd } from "@/services/get-readme-md";
import { GithubReadme } from "@/components/GithubReadme";
// import { request } from "../services/datocms";

export default function Index({ data }) {
  return (
    <>
      <Head>
        <title>Andrew Crescencio</title>
        <meta
          name="description"
          content="Andrew Crescencio, Frontend Developer."
        />

        <meta name="author" content="Andrew Crescencio" />
        <meta name="og:site_name" content="Andrew Crescencio" />
        <meta name="og:type" content="website" />

        <meta
          name="og:title"
          content="Andrew Crescencio - Frontend Developer"
        />
        <meta
          name="og:description"
          content="Andrew Crescencio, Frontend Developer."
        />
      </Head>
      <GithubReadme markdown={data} />
    </>
  );
}

// const HOMEPAGE_QUERY = `query CmsData {
//   allExperiences {
//     id
//     companyName
//     companyImage {
//       url
//     }
//     role
//     _status
//     _firstPublishedAt
//   }

//   _allExperiencesMeta {
//     count
//   }
// }`;

export const getStaticProps = async () => {
  let data = null;
  // let cmsData = null;
  try {
    data = await getReadmeMd();
    // cmsData = await await request({
    //   query: HOMEPAGE_QUERY,
    // });
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
    },
    revalidate: 24 * 60 * 60,
  };
};
