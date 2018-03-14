import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 24px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #6a6a6a;
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: ${props => props.textAlign || 'left'}
`;

export default Paragraph;
