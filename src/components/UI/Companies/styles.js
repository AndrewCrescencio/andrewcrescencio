import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 324px));
  justify-content: center;
  margin: 0 auto;
  row-gap: 72px;
  ${media.tablet`
    column-gap: 24px;
    row-gap: 72px;
  `}
  ${media.laptop`
    grid-template-columns: repeat(auto-fit, minmax(288px, 336px));
    justify-content: space-between;
  `}
`;
