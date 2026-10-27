import { media } from "@/styles/media-querie";
import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 344px));
  justify-content: center;
  margin: 0 auto;
  gap: 32px;
  ${media.tablet`
    gap: 48px;
  `}
`;
