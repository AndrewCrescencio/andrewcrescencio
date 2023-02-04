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
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid gray;
  }

  h2 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 500;
    line-height: 1.25;
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid gray;
  }

  h3 {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 18px;
  }

  p {
    margin-bottom: 16px;
    line-height: 1.5;
  }

  p + h2 {
    margin-top: 32px;
  }
`;
