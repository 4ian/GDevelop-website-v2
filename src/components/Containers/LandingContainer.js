import styled from 'styled-components';
import { media } from '../../lib/media';
import background from '../../img/background.jpg';

const LandingContainer = styled.div`
  width: 100%;

  padding: 40px;
  margin-bottom: 20px;
  display: block;

  background-color: #7847c0;
  background-image: url(${background});
  background-size: cover;

  color: white;

  ${media.tablet`
    text-align: center;
  `};
`;

export default LandingContainer;
