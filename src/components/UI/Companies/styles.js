import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  ${media.tablet`
    gap: 96px;
  `}
`;