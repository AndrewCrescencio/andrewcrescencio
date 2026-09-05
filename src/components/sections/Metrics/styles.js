import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.laptop`
    grid-template-columns: repeat(6, 1fr);
  `}
`;

export const MetricCard = styled.div`
  padding: 32px 24px;
  text-align: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.navbarBg};
  transition: all 300ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }

  ${media.phone`
    padding: 24px 16px;
  `}
`;

export const MetricValue = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.primary};
  marginBottom: 8px;

  ${media.tablet`
    font-size: 48px;
  `}

  ${media.laptop`
    font-size: 56px;
  `}
`;

export const MetricLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};
  marginBottom: 4px;

  ${media.tablet`
    font-size: 16px;
  `}
`;

export const MetricContext = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;