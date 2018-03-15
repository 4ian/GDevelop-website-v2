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

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <TransparentContainer>
          <BigTitle>Create your own games</BigTitle>
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
                <BigButton>Try it online</BigButton>
                <BigButton>Download</BigButton>
              </CenteredRow>
            </CenteredColumn>
          </Row>
          <BigTitle>Events - game creation for everyone</BigTitle>
          <Paragraph>
            What makes GDevelop unique and so easy to use are the events. Events
            are a powerful way to express the logic of your game, without having
            to learn a programming language.
          </Paragraph>
          <CenteredBigImage maxWidth="800px" src={event} />
          <ExplanationText>
            When Space is pressed, the character animation and a sound are
            played. If a bomb touches the character, they are both destroyed.
          </ExplanationText>
          <BigTitle>Export your game in one click</BigTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Paragraph>
          <CenteredBigImage maxWidth="600px" src={phoneWithGame} />
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
