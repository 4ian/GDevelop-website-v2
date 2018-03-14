import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/media';

const CenteredBigImage = styled.img`
  max-width: ${props => props.maxWidth};

  ${media.tablet`
    max-width: 90%;
  `};
`;

const Container = styled.div`
  text-align: center;
`;

export default props => (
  <Container>
    <CenteredBigImage {...props} />
  </Container>
);
