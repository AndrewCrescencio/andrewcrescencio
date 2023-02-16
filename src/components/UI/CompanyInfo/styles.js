import Image from "next/image";
import styled from "styled-components";

export const Info = styled.div`
  margin-bottom: 64px;
  display: grid;
  justify-content: center;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;
  margin-bottom: 64px;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const InfoBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const CompanyName = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const CompanyRole = styled.p`
  margin-bottom: 8px;
`;

export const CompanyTime = styled.p``;

export const CompanyLogo = styled(Image)`
  width: 100%;
  max-width: 150px;
  height: auto;
`;
