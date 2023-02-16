import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  margin: 0 auto;
  gap: 24px;
  ${media.tablet`
    gap: 48px;
  `}
`;

export const Title = styled.h1`
  text-align: center;
  display: block;
  font-size: 32px;
  margin-bottom: 48px;
`;
