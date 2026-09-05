import styled from "styled-components";
import { media } from "@/styles/media-querie";
import { Heading, Text } from "@/components/typography";

export const Card = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.navbarBg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 300ms ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  ${media.phone`
    border-radius: 8px;
  `}
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};

  .project-image {
    object-fit: cover;
    transition: transform 300ms ease;
  }

  ${Card}:hover & .project-image {
    transform: scale(1.05);
  }

  .confidential-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const CardHeader = styled.div`
  padding: 20px 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CardCategory = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  width: fit-content;
`;

export const CardTitle = styled(Heading)`
  margin: 0;
  font-size: 18px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};

  ${media.tablet`
    font-size: 20px;
  `}
`;

export const CardDescription = styled(Text)`
  padding: 0 20px 16px;
  margin: 0;
  color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardTechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 20px 16px;
`;

export const CardTechItem = styled.span`
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  white-space: nowrap;
  transition: all 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CardMetrics = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.black};
`;

export const CardMetric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const CardFooter = styled.div`
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  margin-top: auto;
`;