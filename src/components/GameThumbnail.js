import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';

const GameThumbnail = styled.div`
  max-width: 100%;
  height: 40vw;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;

  ${media.tablet`
    height: 40vh;
  `};
`;

export default GameThumbnail;
