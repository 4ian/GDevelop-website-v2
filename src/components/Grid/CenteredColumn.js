import React from 'react';
import styled from 'styled-components';
import { media } from '../../lib/media';

const CenteredColumn = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
  flex: ${props => (props.flex !== undefined ? props.flex : '1')};
  justify-content: center;

  ${media.tablet`
    display: block;
  `};
`;

export default CenteredColumn;
