import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (min-width: 1440px) {
    gap: 20px;
  }
`;

export const ListItem = styled.li`
  font: inherit;
`;

export const Link = styled.a`
  font: inherit;
  svg {
    transition: all 250ms ease-in-out;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
