import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';
import background from '../../img/background.png';

const LandingContainer = styled.div`
  width:100%;

  padding: 40px;
  margin-bottom: 20px;
  display: block;

  background-image: url(${background});

  color: white;

  ${media.tablet`
    text-align: center;
  `};
`;

export default LandingContainer;
