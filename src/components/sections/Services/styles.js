import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const ServicesContainer = styled.div`
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

export const ServiceCard = styled.div`
  padding: 32px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.navbarBg};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 300ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  ${media.phone`
    padding: 24px;
  `}
`;

export const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.primary};
  marginBottom: 20px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ServiceExamples = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  marginTop: auto;
  paddingTop: 16px;
  borderTop: 1px solid ${({ theme }) => theme.colors.divider};

  span {
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    borderRadius: 4px;
    background-color: ${({ theme }) => theme.colors.black};
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