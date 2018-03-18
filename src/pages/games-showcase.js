import React from 'react';
import Link from 'gatsby-link';
import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';
import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import WhiteBigButton from '../components/WhiteBigButton';
import CenteredBigImage from '../components/CenteredBigImage';
import RightImage from '../components/RightImage';
import ExplanationText from '../components/ExplanationText';

import phoneWithGame from '../img/phone-with-game.png';
import landingScreen from '../img/landing-screen.png';
import bios from '../img/games/big_bios.jpg';
import megaPanicPixel from '../img/games/big_megapanicpixel.jpg';
import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Column from '../components/Grid/Column';
import CenteredColumn from '../components/Grid/CenteredColumn';
import GameThumbnail from '../components/GameThumbnail';

export default class EducationPage extends React.Component {
  render() {
    return (
      <div>
        <TransparentContainer>
          <BigTitle>Games showcase</BigTitle>
          <Row>
            <Column>
              <GameThumbnail src={bios} />
              <CenteredRow>
                <BigButton ahref="http://TODO.com">Download</BigButton>
              </CenteredRow>
            </Column>
            <Column>
              <GameThumbnail src={megaPanicPixel} />
              <CenteredRow>
                <BigButton ahref="http://TODO.com">Download</BigButton>
              </CenteredRow>
            </Column>
          </Row>
        </TransparentContainer>
        <BannerContainer>
          <WhiteBigTitle>Make your first game</WhiteBigTitle>
          <WhiteParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </WhiteParagraph>
          <WhiteBigButton>Try it online</WhiteBigButton>
        </BannerContainer>
      </div>
    );
  }
}
