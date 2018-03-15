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

import event from '../img/event.png';
import phoneWithGame from '../img/phone-with-game.png';
import landingScreen from '../img/landing-screen.png';
import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Column from '../components/Grid/Column';
import CenteredColumn from '../components/Grid/CenteredColumn';

export default class EducationPage extends React.Component {
  render() {
    return (
      <div>
        <TransparentContainer>
          <BigTitle>Game creation in education</BigTitle>
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
