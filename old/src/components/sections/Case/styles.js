import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const CaseContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const CaseHeader = styled.header`
  padding: 80px 0 48px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  ${media.laptop`
    padding: 120px 0 64px;
  `}
`;

export const CaseMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;

  ${media.tablet`
    gap: 32px 48px;
  `}
`;

export const CaseMetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;

  .meta-label {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .meta-value {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};
    font-weight: 500;

    ${media.tablet`
      font-size: 16px;
    `}
  }
`;

export const CaseContent = styled.main`
  padding: 80px 0;

  ${media.laptop`
    padding: 120px 0;
  `}
`;

export const CaseSection = styled.section`
  margin-bottom: 64px;

  ${media.laptop`
    margin-bottom: 96px;
  `}
`;

export const CaseGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.laptop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const GalleryImage = styled.div`
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16/9;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.navbarBg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 300ms ease;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const CaseTechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CaseTechItem = styled.span`
  font-size: 13px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  white-space: nowrap;
  transition: all 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CaseCTA = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  ${media.laptop`
    padding: 120px 0;
  `}
`;

export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: color 200ms ease;
  font-family: inherit;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;