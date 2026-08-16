import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  ${media.laptop`
    gap: 96px;
  `}
`;

export const Heading = styled.p``;

export const List = styled.ul`
  list-style: circle;
  text-align: left;
  display: inline-block;
  margin-top: 16px;
`;

export const ListItem = styled.li`
  max-width: 480px;
  margin-left: 16px;
  opacity: 0.87;
`;