import styled from "styled-components";
import { media } from "@/styles/media-querie";
import Link from "next/link";

export const Card = styled.div`
  width: 100%;
  border-radius: 4px;
  transition: all 300ms ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.12);
  text-align: center;
  border: 1px solid #444c56;
  &:hover {
    transform: scale(1.025);
  }
`;

export const CardBody = styled.div`

`
export const CardHeader = styled.div`
  padding: 14px 12px;
`

export const CardImage = styled.div`
  width: 100%;
  margin-bottom: 16px;
  > div {
    position: unset !important;
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

  width: 100%;
  height: 48px;
  display: grid;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font: inherit;
  font-weight: 500;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;
