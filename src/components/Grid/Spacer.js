import React from 'react';
import styled from 'styled-components';

const Spacer = styled.div`
  display: block;
  height: ${props => props.height || 0};
  min-height: ${props => props.height || 0};
`;

export default Spacer;
