import styled from "styled-components";
import { createMediaQueries } from "@/styles/utils/create-media-queries";

export const Title = styled.h1(
  ({theme}) => ({
    fontWeight: 400,
    fontSize: 36,
    color: theme.colors.onSurfaceHighEmphasis,
    "@media (min-width: 768px)": {
      fontSize: 50,
    },
    "@media (min-width: 1440px)": {
      fontSize: 60,
    },
  }),
  ({ marginBottom, textAlign }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      },
      {
        property: "text-align",
        values: textAlign,
      },
    ]),
  })
);

export const SubTitle = styled.h2(
  ({theme}) => ({
    fontWeight: 500,
    fontSize: "26px",
    color: theme.colors.onSurfaceHighEmphasis,
    "@media (min-width: 768px)": {
      fontSize: "36px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "40px",
    },
  }),
  ({ marginBottom, textAlign }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      },
      {
        property: "text-align",
        values: textAlign,
      },
    ]),
  })
);

export const Heading = styled.h3(
  ({theme}) => ({
    fontWeight: 400,
    fontSize: "18px",
    color: theme.colors.onSurfaceHighEmphasis,
    "@media (min-width: 768px)": {
      fontSize: "24px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "26px",
    },
  }),
  ({ marginBottom }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      },
    ]),
  })
);

export const SubHeading = styled.h4(
  ({theme}) => ({
    fontWeight: 400,
    fontWize: "16px",
    color: theme.colors.onSurfaceMediumEmphasis,
    "@media (min-width: 768px)": {
      fontSize: "18px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "20px",
    },
  }),
  ({ marginBottom }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      },
    ]),
  })
);

export const Text = styled.p(
  ({theme}) => ({
    width: "100%",
    maxWidth: "580px",
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
    color: theme.colors.onSurfaceMediumEmphasis,
    "@media (min-width: 768px)": {
      fontSize: "16px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "18px",
    },
  }),
  ({ marginBottom }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      },
    ]),
  })
);
