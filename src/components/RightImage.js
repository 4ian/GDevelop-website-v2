import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/media';

const appearFromRight = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0.2;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`;

const RightImage = styled.img`
  max-height: 70vh;
  position: relative;
  left: 60px;
  box-shadow: 0 4px 15px 0 #9B9B9B;
  margin-bottom: 15px;
  margin-top: 10px;
  animation: ${appearFromRight} 0.6s ease-out forwards;

  ${media.tablet`
    max-width: 100%;
    left: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    animation: ${fadeIn} 0.6s ease-out forwards;
  `};
`;

export default props => <RightImage {...props} />;
