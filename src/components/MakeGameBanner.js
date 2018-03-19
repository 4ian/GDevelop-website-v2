import React from 'react';
import BannerContainer from './Containers/BannerContainer';
import WhiteBigTitle from './WhiteBigTitle';
import WhiteParagraph from './WhiteParagraph';
import WhiteBigButton from './WhiteBigButton';
import CenteredRow from './Grid/CenteredRow';
import config from '../config';

const MakeGameBanner = ({ title, text }) => (
  <BannerContainer>
    <WhiteBigTitle>{title || 'Make your first game'}</WhiteBigTitle>
    <WhiteParagraph>
      {text ||
        'Imagine and publish your games with GDevelop. Bundled with tutorials and examples.'}
    </WhiteParagraph>
    <CenteredRow>
      <WhiteBigButton to={config.onlineEditorUrl}>Try it online</WhiteBigButton>
      <WhiteBigButton to="/download/">Download</WhiteBigButton>
    </CenteredRow>
  </BannerContainer>
);

export default MakeGameBanner;
