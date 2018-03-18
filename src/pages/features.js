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

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <div>
      <BannerContainer>
        <WhiteBigTitle>Create your own games</WhiteBigTitle>
        <Row reverse>
          <CenteredColumn flex={8}>
            <RightImage src={landingScreen} />
          </CenteredColumn>
          <CenteredColumn flex={5}>
            <Paragraph textAlign="center">
              GDevelop is an open source, cross-platform game creator designed
              to be used by everyone - no programming skills required.
            </Paragraph>
            <CenteredRow>
              <WhiteBigButton>Try it online</WhiteBigButton>
              <WhiteBigButton>Download</WhiteBigButton>
            </CenteredRow>
          </CenteredColumn>
        </Row>
      </BannerContainer>
      <BannerContainer>
        <WhiteBigTitle>Make your first game</WhiteBigTitle>
        <WhiteParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam
        </WhiteParagraph>
        <WhiteBigButton>Try it online</WhiteBigButton>
      </BannerContainer>
        <TransparentContainer>
          <BigTitle>Features</BigTitle>
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
