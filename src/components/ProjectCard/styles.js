import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/media-querie";

export const Card = styled.a`
  border: 1px solid gray;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  > div {
    padding: 24px 24px 0;
  }
`;

// export const CardImage = styled(Image)`
//   margin: 0 auto 24px;
//   display: block;
//   width: 100%;
//   @media (max-width: 768px) {
//     max-width: unset;
//     height: auto;
//   }
// `;

export const CardTitle = styled.h3`
  margin-bottom: 24px;
`;

export const Techs = styled.div`
  margin-bottom: 24px;
  h4 {
    margin-bottom: 8px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
  }
`;

export const CardButton = styled.button`
  margin-top: auto;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.text};
  font-weight: 600;
  font-family: inherit;
`;
