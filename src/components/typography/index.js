import styled from "styled-components";
import { createMediaQueries } from "@/styles/utils/create-media-queries";

export const Title = styled.h1(
  {
    fontWeight: 400,
    fontSize: 36,
    "@media (min-width: 768px)": {
      fontSize: 50,
    },
    "@media (min-width: 1440px)": {
      fontSize: 60,
    },
  },
  ({ marginBottom, textAlign }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      },
      {
        property: "text-align",
        values: textAlign,
      }
    ]),
  })
);

export const SubTitle = styled.h2(
  {
    fontWeight: 500,
    fontSize: '26px',
    '@media (min-width: 768px)': {
      fontSize: '36px'
    },
    '@media (min-width: 1440px)': {
      fontSize: '40px'
    }
  },
  ({ marginBottom, textAlign }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      },
      {
        property: "text-align",
        values: textAlign,
      }
    ]),
  })
);

export const Heading = styled.h3(
  {
    fontWeight: 400,
    fontSize: '18px',
    '@media (min-width: 768px)': {
      fontSize: '24px',
    },
    '@media (min-width: 1440px)': {
      fontSize: '26px',
    }
  },
  ({ marginBottom }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      }
    ]),
  })
);

export const SubHeading = styled.h4(
  {
    fontWeight: 400,
    fontWize: '16px',
    '@media (min-width: 768px)': {
      fontSize: '18px'
    },
    '@media (min-width: 1440px)': {
      fontSize: '20px'
    }
  },
  ({ marginBottom }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      }
    ]),
  })
);

export const Text = styled.p(
  {
    width: '100%',
    maxWidth: '580px',
    fontSize: '14px',
    lineHeight: 1.5,
    "@media (min-width: 1440px)": {
      fontSize: '16px',
    },
  },
  ({ marginBottom }) => ({
    ...createMediaQueries([
      {
        property: "margin-bottom",
        values: marginBottom,
      }
    ]),
  })
);