import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Info = styled.div`
  width: 100%;
  text-align: center;
  ${media.laptop`
    text-align: left;
  `}
`;