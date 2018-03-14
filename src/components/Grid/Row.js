import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  ${media.tablet`
    display: block;
  `};
`;

export default Row;
