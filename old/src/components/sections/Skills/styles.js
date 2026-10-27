import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.laptop`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const Group = styled.div``;

export const List = styled.ul``;

export const ListItem = styled.li``;