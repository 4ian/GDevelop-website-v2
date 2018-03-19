import React from 'react';
import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  margin-left: 45px;
  font-size: 24px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #6a6a6a;

  &::before {
    content: '•';
    color: #51509c;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  i {
    font-style: normal;
    opacity: 0.8;
  }
`;
