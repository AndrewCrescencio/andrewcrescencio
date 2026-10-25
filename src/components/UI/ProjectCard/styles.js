import styled from "styled-components";
import { media } from "@/styles/media-querie";
import Link from "next/link";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 320px;
  max-width: 420px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  transition: all 300ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  }

  ${media.phone`
    min-width: 100%;
    max-width: 100%;
  `}
`;

export const CardHeader = styled.div`
  padding: 24px 24px 16px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  .meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .category {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.primary};
    padding: 4px 10px;
    background-color: ${({ theme }) => `${theme.colors.primary}15`};
    border-radius: 6px;
  }

  .company {
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
  }

  .role-period {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 8px;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  overflow: hidden;

  > div {
    position: unset !important;
    height: 100% !important;
  }

  img {
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    transition: transform 300ms ease;
  }

  ${Card}:hover & img {
    transform: scale(1.03);
  }
`;

export const CardBody = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;

  .par-section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.primary};
      margin: 0;
    }

    &.results ul {
      margin: 0;
      padding-left: 20px;
      list-style: disc;
      display: flex;
      flex-direction: column;
      gap: 6px;

      li {
        line-height: 1.5;
      }
    }
  }
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  span {
    font-size: 11px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.navbarBg};
    color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
    border: 1px solid ${({ theme }) => theme.colors.divider};
    white-space: nowrap;
    transition: all 200ms ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CardMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.navbarBg};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  ${media.tablet`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  text-align: center;

  .metric-value {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.primary};
  }

  .metric-label {
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
  }
`;

export const CardButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 24px;
  margin: 0 24px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  text-align: center;
  transition: all 200ms ease;
  border: 2px solid transparent;

  ${({ variant, theme }) =>
    variant === "primary" &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
    border-color: ${theme.colors.primary};

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px ${theme.colors.primary}40;
    }
  `}

  ${({ variant, theme }) =>
    variant === "secondary" &&
    `
    background-color: transparent;
    color: ${theme.colors.onSurfaceHighEmphasis};
    border-color: ${theme.colors.divider};

    &:hover {
      background-color: ${theme.colors.navbarBg};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;