import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: start;

  ${media.tablet`
    grid-template-columns: 320px 1fr;
  `}

  ${media.laptop`
    grid-template-columns: 400px 1fr;
  `}
`;

export const AboutImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4/5;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  border: 1px solid ${({ theme }) => theme.colors.divider};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.phone`
    max-width: 320px;
    margin: 0 auto;
  `}
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;