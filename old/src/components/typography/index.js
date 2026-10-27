import styled from "styled-components";
import { createMediaQueries } from "@/styles/utils/create-media-queries";

const sizeMap = {
  xs: { base: "12px", md: "13px", lg: "14px", lineHeight: "1.5" },
  sm: { base: "13px", md: "14px", lg: "15px", lineHeight: "1.6" },
  md: { base: "15px", md: "16px", lg: "18px", lineHeight: "1.6" },
  lg: { base: "17px", md: "19px", lg: "21px", lineHeight: "1.6" },
  xl: { base: "20px", md: "22px", lg: "24px", lineHeight: "1.5" },
};

const weightMap = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const Title = styled.h1(
  ({ theme }) => ({
    fontWeight: 400,
    fontSize: 36,
    color: theme.colors.onSurfaceHighEmphasis,
    lineHeight: 1.15,
    "@media (min-width: 768px)": {
      fontSize: 50,
    },
    "@media (min-width: 1440px)": {
      fontSize: 60,
    },
  }),
  ({ marginBottom, textAlign }) => ({
    ...createMediaQueries([
      { property: "margin-bottom", values: marginBottom },
      { property: "text-align", values: textAlign },
    ]),
  })
);

export const SubTitle = styled.h2(
  ({ theme }) => ({
    fontWeight: 500,
    fontSize: "26px",
    color: theme.colors.onSurfaceHighEmphasis,
    lineHeight: 1.25,
    "@media (min-width: 768px)": {
      fontSize: "36px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "40px",
    },
  }),
  ({ marginBottom, textAlign }) => ({
    ...createMediaQueries([
      { property: "margin-bottom", values: marginBottom },
      { property: "text-align", values: textAlign },
    ]),
  })
);

export const Heading = styled.h3(
  ({ theme }) => ({
    fontWeight: 400,
    fontSize: "20px",
    color: theme.colors.onSurfaceHighEmphasis,
    lineHeight: 1.3,
    "@media (min-width: 768px)": {
      fontSize: "26px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "30px",
    },
  }),
  ({ marginBottom }) => ({
    ...createMediaQueries([
      { property: "margin-bottom", values: marginBottom },
    ]),
  })
);

export const SubHeading = styled.h4(
  ({ theme }) => ({
    fontWeight: 500,
    fontSize: "16px",
    color: theme.colors.onSurfaceMediumEmphasis,
    lineHeight: 1.4,
    "@media (min-width: 768px)": {
      fontSize: "18px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "20px",
    },
  }),
  ({ marginBottom }) => ({
    ...createMediaQueries([
      { property: "margin-bottom", values: marginBottom },
    ]),
  })
);

export const Text = styled.p`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "580px")};
  line-height: ${({ size }) => sizeMap[size]?.lineHeight || sizeMap.md.lineHeight};
  letter-spacing: 0.25px;
  color: ${({ theme, color }) => {
    switch (color) {
      case "high":
        return theme.colors.onSurfaceHighEmphasis;
      case "medium":
        return theme.colors.onSurfaceMediumEmphasis;
      case "low":
        return theme.colors.onSurfaceLowEmphasis;
      case "primary":
        return theme.colors.primary;
      default:
        return theme.colors.onSurfaceMediumEmphasis;
    }
  }};
  font-weight: ${({ weight }) => weightMap[weight] || weightMap.regular};
  font-size: ${({ size, theme }) => {
    const s = sizeMap[size] || sizeMap.md;
    return theme.mediaQueries
      ? `
        ${s.base};
        @media (min-width: 768px) { font-size: ${s.md}; }
        @media (min-width: 1440px) { font-size: ${s.lg}; }
      `
      : s.base;
  }};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  margin: 0;

  ${({ marginBottom }) => createMediaQueries([
    { property: "margin-bottom", values: marginBottom },
  ])}
`;