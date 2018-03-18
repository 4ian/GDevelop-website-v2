import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';

const TransparentContainer = styled.div`
  width:100%;
  min-height: 20px;

  padding: 60px;
  display: block;

  ${media.tablet`
    padding: 30px;
  `};
`;

export default TransparentContainer;
