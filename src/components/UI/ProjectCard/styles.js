import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/media-querie";

export const Card = styled.a`
  border: 1px solid gray;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CardBody = styled.div`
  padding: 24px 24px 0;
`
export const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const CardButton = styled.button`
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  background-color: ${({theme}) => theme.colors.text};
  font-weight: 600;
  font-family: inherit;
`;
