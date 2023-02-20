import styled from "styled-components";
import { media } from "@/styles/media-querie";
import Link from "next/link";

export const Card = styled.div`
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border: 1px solid ${({ theme }) => theme.colors.divider};
  text-align: center;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.025);
  }
`;

export const CardBody = styled.div`

`
export const CardHeader = styled.div`
  padding: 14px 12px;
  h4 {
    color: ${({ theme }) => theme.colors.onSurfaceHighEmphasis};
  }
`

export const CardImage = styled.div`
  width: 100%;
  height: auto;
  > div {
    position: unset !important;
    height: auto;
  }
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    aspect-ratio: 16/9;
  }
`;

export const CardButton = styled(Link)`
  border: none;
  width: 100%;
  height: 51px;
  margin-top: 12px;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font: inherit;
  font-weight: 500;
  transition: all 300ms ease-in-out;
  &:hover {
    /* background-color: ${({ theme }) => theme.colors.primary}; */
    background-color: #272727;
    /* color: ${({ theme }) => theme.colors.black}; */
    color: ${({ theme }) => theme.colors.white};
  }
`;
