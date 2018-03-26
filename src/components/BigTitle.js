import React from 'react';
import styled from 'styled-components';
import { media, ie10and11 } from '../lib/media';

const BigTitle = styled.h1`
  font-size: 50px;
  line-height: 68px;
  font-family: 'Asap', Arial, sans-serif;
  font-weight: 400;
  display: inline-block;
  margin-top: 35px;
  margin-bottom: 15px;

  color: #51509c;

  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);

  ${ie10and11`
    color: #3c4698;
    background-image: none;
    background: none;
  `};

  ${media.tablet`
    font-size: 36px;
    line-height: 40px;
    text-align: center;
  `};
`;

export default ({ children }) => (
  <div>
    <BigTitle>{children}</BigTitle>
  </div>
);
