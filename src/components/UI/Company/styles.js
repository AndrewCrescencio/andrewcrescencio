import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin: 0 auto 128px;
`;

export const CardImage = styled(Image)`
  width: 100%;
  max-width: 298px;
  height: auto;
`;

export const CardTitle = styled.h2`
margin-bottom: 16px;
`;

export const CardSubTitle = styled.h3``;
