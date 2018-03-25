import styled from 'styled-components';
import { media } from '../../lib/media';

const TransparentContainer = styled.div`
  width: 100%;
  min-height: 20px;
  opacity: 0.78;

  padding-left: ${props => props.noPadding ? '0' : '60px'};
  padding-right: ${props => props.noPadding ? '0' : '60px'};
  display: block;

  ${media.tablet`
    padding-left: ${props => props.noPadding ? '0' : '30px'};
    padding-right: ${props => props.noPadding ? '0' : '30px'};
  `};
`;

export default TransparentContainer;
