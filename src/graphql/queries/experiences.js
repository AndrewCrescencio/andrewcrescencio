export const EXPERIENCES_QUERY = `query EXPERIENCES_QUERY {
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
    techs {
      techImage{
        url
        alt
        width
        height
      }
    }
    projects {
      projectImage {
        url
        alt
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
      }
    }
  }
}
`;
