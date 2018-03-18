import React from 'react';
import styled from 'styled-components';

const BigGhostButton = styled.a`
  min-height: 56px;
  min-width: 200px;
  padding: 15px;
  margin: 20px;
  display: inline-block;
  text-align: center;

  font-family: 'Roboto', Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  background: transparent;

  border-radius: 4px;
  border: 1px solid #51509c;
  color: #51509c;

  font-size: 20px;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    color: #51509c;
    box-shadow: 0 0px 6px 0 #51509c;
  }
`;

export default BigGhostButton;
