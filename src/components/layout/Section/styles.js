import styled from "styled-components"
import { media } from "@/styles/media-querie";

export const Section = styled.section`
  padding: 80px 0;
  ${(props) => props.black && 
  `background-color: ${props.theme.colors.black} !important;
    color: ${props.theme.colors.white} !important;
  `};
  ${media.laptop`
    padding: 128px 0;
  `}

`;

