import { css } from "styled-components";

export const sizes = {
  phone: 375,
  tablet: 768,
  desktop: 1440,
  laptop: 1280,
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
