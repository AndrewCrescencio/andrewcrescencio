import Head from "next/head";

import { getReadmeMd } from "@/services/get-readme-md";
import { request } from "../services/datocms";

import { GithubReadme } from "@/components/GithubReadme";
import { Experiences } from "@/components/Experiences";

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

const HOMEPAGE_QUERY = `query CmsData {
  allExperiences {
    id
    companyName
    companyImage {
      url
      width
      height
    }
    responsibilities {
      description
    }
    role
    _status
    _firstPublishedAt
    projects {
      projectImage {
        url
        alt
        width
        height
      }
      projectTitle
      projectLink
      projectResponsibilities {
        description
      }
      technologies {
        techImage{
          url
          width
          height
        }
        techName
      }
    }
  }

  _allExperiencesMeta {
    count
  }
}
`;

export const getStaticProps = async () => {
  let data = null;
  let cmsData = null;
  try {
    data = await getReadmeMd();
    cmsData = await await request({
      query: HOMEPAGE_QUERY,
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
