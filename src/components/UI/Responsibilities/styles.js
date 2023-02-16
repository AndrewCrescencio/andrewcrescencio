import styled from "styled-components";

export const Container = styled.div``
export const Heading = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  list-style: circle;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  max-width: 480px;
  margin-left: 16px;
  opacity: 0.87;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
