import React from 'react';
import styled from 'styled-components';
import { ie10and11 } from '../lib/media';

const BigTitle = styled.h1`
  font-size: 72px;
  line-height: 89px;
  font-family: 'Lobster', Arial, sans-serif;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 15px;

  background-image: linear-gradient(
    45deg,
    #4ab0e4,
    #4ab0e4 40%,
    #3c4698 60%,
    #3c4698
  );

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);

  ${ie10and11`
    color: #3c4698;
    background-image: none;
    background: none;
  `};
`;

export default ({ children }) => (
  <div>
    <BigTitle>{children}</BigTitle>
  </div>
);
