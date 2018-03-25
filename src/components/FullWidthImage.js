import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/media';

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`;

const FullWidthImage = styled.img`
  width: 100%;

  animation: ${fadeIn} 0.5s ease-out forwards;

  ${media.tablet`
  `};
`;

export default props => <FullWidthImage {...props} />;
