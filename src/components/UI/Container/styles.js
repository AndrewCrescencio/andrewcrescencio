import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 768px) {
    padding: 0 32px;
  }
  /* @media (min-width: 1024px) {
    padding: 0 64px;
  } */
`;
