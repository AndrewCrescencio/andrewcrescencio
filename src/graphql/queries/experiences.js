export const EXPERIENCES_QUERY = `query EXPERIENCES_QUERY {
  experience {
    companies {
      companyName
      companyImage {
        url
        width
        height
      }
      companyRole
      companyTime
    }
    projects {
      projectTitle
      projectImage {
        url
      }
      projectLink
    }
  }
}
`;
