import Image from "next/image";
import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const Info = styled.div`
  width: 100%;
  text-align: center;
`;

export const InfoImage = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;
  ${media.laptop`
    padding: 48px;
  `}
  > div {
    position: unset !important;
    height: auto;
  }
`;

export const CompanyLogo = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  aspect-ratio: 16/9;
`;
