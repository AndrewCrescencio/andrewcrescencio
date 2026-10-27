import styled from "styled-components";
import { media } from "@/styles/media-querie";

export const ContactWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactContent = styled.div`
  padding: 48px 24px;

  ${media.laptop`
    padding: 64px 32px;
  `}
`;

export const ContactButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  ${media.tablet`
    flex-direction: row;
    justify-content: center;
  `}

  a {
    width: 100%;
    max-width: 280px;

    ${media.tablet`
      width: auto;
    `}
  }
`;