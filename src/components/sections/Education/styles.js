import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 600px;
  margin: 0 auto;
  ${media.laptop`
    margin: 0;
    align-items: flex-start;
  `}
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.navbarBg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme.colors.onSurfaceMediumEmphasis};
  font-size: 14px;
`;