// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

// Quick hack to detect IE10 and IE11 in CSS
// Should be replaced by Modernizr or something similar.
export const ie10and11 = (...args) => css`
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    ${css(...args)};
  }
`;
