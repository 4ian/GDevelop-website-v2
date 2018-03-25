import React from 'react';
import { translate } from 'react-i18next';
import CenteredRow from './Grid/CenteredRow';
import TransparentContainer from './Containers/TransparentContainer';
import BigButton from './BigButton';
import Column from './Grid/Column';
import CenteredColumn from './Grid/CenteredColumn';
import Paragraph from './Paragraph';
import BigGhostButton from './BigGhostButton';
import FullWidthImage from './FullWidthImage';
import bubGameBanner from '../img/bub-game-banner.jpg';
import bubAnimatedLogo from '../img/bub-animated-logo.gif';
import GameTitle from './GameTitle';
import Row from './Grid/Row';
import Spacer from './Grid/Spacer';

const BubBanner = ({ t, title, text }) => (
  <React.Fragment>
    <FullWidthImage
      src={bubGameBanner}
      alt="Lil BUB's game: a retro 8 bit game made with GDevelop"
    />
    <TransparentContainer>
      <GameTitle>
        <b>Lil BUB's HELLO EARTH</b> by Lil BUB's Team
      </GameTitle>
      <Spacer height="30px" />
      <Row>
        <Column flex={3}>
          <Paragraph>
            {t(
              'BUB is a very special, one of a kind critter. More specifically, she is the most amazing cat on the planet... and her game is made with GDevelop!'
            )}
          </Paragraph>
          <Paragraph>
            {t(
              'The game is a retro 8-bit game, with beautiful arts and soundtrack, which alternates between platformers levels, with hidden secrets, and shooter levels with bosses, multiple enemies and bonuses.'
            )}
          </Paragraph>
        </Column>
        <Column>
          <img src={bubAnimatedLogo} alt="" />
        </Column>
      </Row>
      <CenteredRow>
        <BigButton to="https://itunes.apple.com/us/app/lil-bubs-hello-earth/id1123383033?mt=8">
          App Store
        </BigButton>
        <BigButton to="https://play.google.com/store/apps/details?id=com.lilbub.game">
          Play Store
        </BigButton>
        <BigButton to="http://compilgames.net/bub-landing-page">
          Windows/Mac/Linux
        </BigButton>
        <BigGhostButton to="http://lilbub.com/game">Kickstarter</BigGhostButton>
      </CenteredRow>
      <Spacer height="50px" />
    </TransparentContainer>
  </React.Fragment>
);

export default translate()(BubBanner);
