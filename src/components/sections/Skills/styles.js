import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.laptop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const SkillGroup = styled.div`
  padding: 24px;
  borderRadius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  backgroundColor: ${({ theme }) => theme.colors.navbarBg};
  height: 100%;
  transition: all 300ms ease;

  &:hover {
    borderColor: ${({ theme }) => theme.colors.primary};
  }
`;

export const SkillCategory = styled.h3`
  fontSize: 14px;
  fontWeight: 600;
  textTransform: uppercase;
  letterSpacing: 0.8px;
  color: ${({ theme }) => theme.colors.primary};
  marginBottom: 20px;
  paddingBottom: 12px;
  borderBottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const SkillItems = styled.ul`
  display: flex;
  flexDirection: column;
  gap: 10px;
`;

export const SkillItem = styled.li`
  fontSize: 14px;
  fontWeight: 500;
  color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};
  display: flex;
  alignItems: center;
  gap: 8px;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    borderRadius: 50%;
    backgroundColor: ${({ theme }) => theme.colors.primary};
    opacity: 0.6;
  }
`;