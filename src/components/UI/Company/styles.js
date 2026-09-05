import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Info = styled.div`
  width: 100%;
  text-align: center;
  padding: 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  &:last-child {
    border-bottom: none;
  }

  ${media.laptop`
    text-align: left;
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 32px;
    align-items: start;
    padding: 48px 0;
  `}
`;

export const CompanyHeader = styled.div`
  ${media.laptop`
    grid-column: 2;
  `}
`;

export const CompanyContext = styled.div`
  marginTop: 16px;
  ${media.laptop`
    grid-column: 2;
  `}
`;

export const CompanyHighlights = styled.div`
  marginTop: 16px;
  ${media.laptop`
    grid-column: 2;
  `}
`;

export const CompanyLogo = styled.div`
  display: flex;
  justify-content: center;
  marginBottom: 16px;

  ${media.laptop`
    justify-content: flex-start;
    marginBottom: 0;
    align-self: start;
  `}

  img {
    maxWidth: 100px;
    maxHeight: 100px;
    objectFit: contain;
    opacity: 0.8;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 1;
    }
  }
`;