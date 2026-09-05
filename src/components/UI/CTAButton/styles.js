import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  transition: all 200ms ease;
  cursor: pointer;
  border: 2px solid transparent;
  white-space: nowrap;

  ${({ theme, $primary }) =>
    $primary &&
    `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
    border-color: ${theme.colors.primary};

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(187, 134, 252, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  `}

  ${({ theme, $secondary }) =>
    $secondary &&
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

  ${media.phone`
    padding: 12px 20px;
    font-size: 14px;
  `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;