import React from 'react';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Container = styled.div`
  width: 100%;

  margin: auto;

  .alice-carousel__wrapper {
    border: none;
  }
`;

export default props => (
  <Container>
    <AliceCarousel {...props} />
  </Container>
);
