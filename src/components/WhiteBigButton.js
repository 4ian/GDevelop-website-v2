import React from 'react';
import styled from 'styled-components';

const WhiteBigButton = styled.a`
  min-height: 74px;
  min-width: 200px;
  padding: 20px;
  margin: 20px;
  display: inline-block;
  text-align: center;

  font-family: 'Roboto', Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  background-color: white;

  border-radius: 4px;
  box-shadow: 0 2px 4px 0 #9B9B9B;

  font-size: 24px;
  color: #4ab0e4;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    color: #4ab0e4;
    box-shadow: 0 4px 15px 0 white;
  }
`;

export default WhiteBigButton;
