import React from 'react';
import { translate } from 'react-i18next';
import BannerContainer from './Containers/BannerContainer';
import WhiteBigTitle from './WhiteBigTitle';
import WhiteParagraph from './WhiteParagraph';
import WhiteBigButton from './WhiteBigButton';
import CenteredRow from './Grid/CenteredRow';
import config from '../config';

const MakeGameBanner = ({ t, title, text }) => (
  <BannerContainer>
    <WhiteBigTitle>{title || t('Make your first game')}</WhiteBigTitle>
    <WhiteParagraph>
      {text ||
        t(
          'Imagine and publish your games with GDevelop. Bundled with tutorials and examples.'
        )}
    </WhiteParagraph>
    <CenteredRow>
      <WhiteBigButton
        to={config.onlineEditorUrl}
        alt="_blank"
        rel="noopener"
        category="webapp"
        label="webapp"
      >
        {t('Try it online')}
      </WhiteBigButton>
      <WhiteBigButton to="/download/">{t('Download')}</WhiteBigButton>
    </CenteredRow>
  </BannerContainer>
);

export default translate()(MakeGameBanner);
