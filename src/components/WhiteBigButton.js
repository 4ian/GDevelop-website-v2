import styled from 'styled-components';
import Link from './Link';

const WhiteBigButton = styled(Link)`
  min-height: 56px;
  min-width: 200px;
  padding: 15px;
  margin: 20px;
  display: inline-block;
  text-align: center;

  font-family: 'Roboto', Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  background-color: white;

  border-radius: 4px;
  box-shadow: 0 2px 3px 0 #51509C;

  font-size: 20px;
  color: #51509C;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    color: #51509C;
    box-shadow: 0 4px 6px 0 #51509C;
  }
`;

export default WhiteBigButton;
