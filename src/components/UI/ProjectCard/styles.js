import styled from "styled-components";
import Link from "next/link";
import { media } from "@/styles/media-querie";
export const Card = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  outline: 2px solid ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.025);
  }

  #techs {
    margin-top: auto;
    margin-bottom: 16px;
  }
`;

export const CardImage = styled.div`
  width: 100%;
  
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

export const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const CardBody = styled.div`
  padding: 24px 16px;
  ${media.laptop`
    padding: 24px;
  `}
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardFooter = styled.div`
  margin-top: auto;
`;

export const CardButton = styled(Link)`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  text-align: center;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
`;
