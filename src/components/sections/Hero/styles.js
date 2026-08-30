import styled from "styled-components";

export const Banner = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
  }
  > svg {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 63px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
    height: 560px;
  }
  h2 {
    max-width: 440px;
    @media (min-width: 1440px) {
      max-width: 520px;
    }
  }
  p {
    max-width: 560px;
    margin-top: 24px;
  }
  svg {
    display: none;
    @media (min-width: 768px) {
      display: block;
      margin-right: 48px;
    }
    @media (min-width: 1280px) {
      margin-right: 96px;
    }
  }
`;

export const LangRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const LangBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: nowrap;
  strong {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 4px;
  }
`;

export const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
`;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }
  svg {
    flex-shrink: 0;
  }
`;
