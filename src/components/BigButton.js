import styled from 'styled-components';
import Link from './Link';

const BigButton = styled(Link)`
  min-height: 56px;
  min-width: 200px;
  padding: 15px;
  margin: 20px;
  display: inline-block;
  text-align: center;

  font-family: 'Roboto', Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  background: #51509c;

  border-radius: 4px;
  box-shadow: 0 0px 0px 0 #51509c;

  font-size: 20px;
  color: white;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    color: white;
    box-shadow: 0 2px 6px 0 #51509c;
  }
`;

export default BigButton;
