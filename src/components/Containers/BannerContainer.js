import styled from 'styled-components';
import background from '../../img/background.jpg';

const BannerContainer = styled.div`
  width:100%;
  min-height: 20px;

  padding: 20px;
  display: block;
  text-align: center;

  background-color: #7847c0;
  background-image: url(${background});
  background-size: cover;

  color: white;
`;

export default BannerContainer;
