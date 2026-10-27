import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 200ms ease;
  cursor: pointer;
  border: 2px solid transparent;
  white-space: nowrap;

  /* Sizes */
  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return `
          padding: 10px 18px;
          font-size: 13px;
          line-height: 18px;
        `;
      case "lg":
        return `
          padding: 16px 32px;
          font-size: 16px;
          line-height: 24px;
        `;
      case "md":
      default:
        return `
          padding: 14px 28px;
          font-size: 14px;
          line-height: 20px;
        `;
    }
  }}

  /* Variants */
  ${({ theme, $variant }) => {
    switch ($variant) {
      case "secondary":
        return `
          background-color: transparent;
          color: ${theme.colors.onSurfaceHighEmphasis};
          border-color: ${theme.colors.divider};

          &:hover {
            background-color: ${theme.colors.navbarBg};
            border-color: ${theme.colors.primary};
            color: ${theme.colors.primary};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};

          &:hover {
            background-color: ${theme.colors.primary}15;
          }
        `;
      case "ghost":
        return `
          background-color: transparent;
          color: ${theme.colors.onSurfaceHighEmphasis};
          border-color: transparent;

          &:hover {
            background-color: ${theme.colors.navbarBg};
            color: ${theme.colors.primary};
          }
        `;
      case "primary":
      default:
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.black};
          border-color: ${theme.colors.primary};

          &:hover {
            filter: brightness(1.1);
            transform: translateY(-2px);
            box-shadow: 0 8px 24px ${theme.colors.primary}40;
          }

          &:active {
            transform: translateY(0);
          }
        `;
    }
  }}

  ${media.phone`
    padding: 12px 20px;
    font-size: 14px;
  `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;