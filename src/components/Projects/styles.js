import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  max-width: 1200px;
  margin: 0 auto 64px;
  gap: 16px;
  ${media.phone`
    gap: 24px;
  `}
  ${media.tablet`
    gap: 32px;
  `}
  ${media.laptop`
    margin: 0 auto 128px;
    gap: 48px;
  `}
`;

export const Title = styled.h1`
  text-align: center;
  display: block;
  font-size: 32px;
  margin-bottom: 48px;
`;
