import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 64px auto;
  padding: 16px;
  border: 1px solid gray;
  border-radius: 8px;
  /* box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), */
  /* 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); */
  @media (min-width: 768px) {
    padding: 32px;
  }

  h1 {
    margin-bottom: 32px;
    padding-bottom: 16px;
  }

  h2 {
    margin-bottom: 16px;
    padding-bottom: 8px;
  }

  p + h2 {
    margin-top: 32px;
  }
`;
