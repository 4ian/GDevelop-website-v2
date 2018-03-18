import React from 'react';
import styled from 'styled-components';

const WhiteBigTitle = styled.h1`
  font-size: 72px;
  line-height: 89px;
  font-family: 'Asap', Arial, sans-serif;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;

  color: white;
`;

export default ({ children }) => (
  <div>
    <WhiteBigTitle>{children}</WhiteBigTitle>
  </div>
);
