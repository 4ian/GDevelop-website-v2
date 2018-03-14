import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${media.tablet`
    display: block;
  `};
`;

export default Column;
