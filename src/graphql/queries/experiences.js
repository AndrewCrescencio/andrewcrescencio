export const EXPERIENCES_QUERY = `query EXPERIENCES_QUERY {
  allExperiences {
    id
    companyName
    companyTime
    companyImage {
      url
      width
      height
    }
    responsibilities {
      description
    }
    role
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
