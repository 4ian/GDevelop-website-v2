import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';

const RightImage = styled.img`
  max-height: 70vh;
  position: relative;
  left: 60px;
  box-shadow: 0 4px 15px 0 #9B9B9B;
  margin-bottom: 15px;
  margin-top: 10px;

  ${media.tablet`
    max-width: 100%;
    left: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  `};
`;

export default props => <RightImage {...props} />;
