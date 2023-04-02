import Image from "next/image";
import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const CompanyLogo = styled(Image)`
  width: 100%;
  max-width: 154px;
  height: auto;
`;
