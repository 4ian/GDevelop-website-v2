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
import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Column from '../components/Grid/Column';
import CenteredColumn from '../components/Grid/CenteredColumn';
import Spacer from '../components/Grid/Spacer';
import { List, ListItem } from '../components/List';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <div>
        <BannerContainer>
          <WhiteBigTitle>Fully featured</WhiteBigTitle>
          <WhiteParagraph>
            GDevelop is bundled with dozens of features to imagine and create
            any kind of games.
          </WhiteParagraph>
        </BannerContainer>
        <TransparentContainer>
          <BigTitle>Objects for your games</BigTitle>
          <List>
            <ListItem>Sprites with multiple animations</ListItem>
            <ListItem>"9 patch" and tiled sprites</ListItem>
            <ListItem>Text objects</ListItem>
            <ListItem>
              Draw custom shapes on screen with the Shape Painter
            </ListItem>
            <ListItem>Support for custom collision masks</ListItem>
          </List>
          <BigTitle>Add behaviors to your game objects</BigTitle>
          <List>
            <ListItem>
              Physics engine - <i>Add realistic behavior to your objects</i>
            </ListItem>
            <ListItem>
              Pathfinding - <i>Have your objects move and avoiding obstacles</i>
            </ListItem>
            <ListItem>Top-down movement</ListItem>
            <ListItem>
              Platformer engine - <i>create platformer games in a breeze</i>
            </ListItem>
            <ListItem>
              Draggable objects -{' '}
              <i>quickly make your objects draggable with mouse/touch</i>
            </ListItem>
            <ListItem>
              And more, to automate current tasks and behaviors in a few clicks!
            </ListItem>
          </List>
          <BigTitle>Design advanced levels and interfaces</BigTitle>
          <List>
            <ListItem>
              The scene editor lets you visually edit your levels
            </ListItem>
            <ListItem>
              Support for multiple layers -{' '}
              <i>Add interfaces and create parallax effects</i>
            </ListItem>
            <ListItem>
              Create your levels dynamically with external layouts
            </ListItem>
            <ListItem>
              Integrated debugger and performance profilers -{' '}
              <i>coming soon!</i>
            </ListItem>
            <ListItem>
              <BigTitle>Make desktop &amp; mobile-ready games</BigTitle>
              Save player data in browser/local storage
            </ListItem>
            <ListItem>Full support for sound effects and music</ListItem>
            <ListItem>Support for touchscreens & multi-touch</ListItem>
          </List>
          <BigTitle>Build ambitious games with advanced features</BigTitle>
          <List>
            <ListItem>
              Communicate with external websites using HTTP requests
            </ListItem>
            <ListItem>
              Use advanced events: loops, for-each and even functions
            </ListItem>
            <ListItem>
              Manipulate variables with arbitrary complex structures and even
              JSON support
            </ListItem>
            <ListItem>Use Javascript to code any part of your game</ListItem>
          </List>
        </TransparentContainer>
        <Spacer height="50px"/>
        <BannerContainer>
          <WhiteBigTitle>Make your first game</WhiteBigTitle>
          <WhiteParagraph>
            Imagine and publish your games with GDevelop. Bundled with tutorials
            and examples.
          </WhiteParagraph>
          <CenteredRow>
            <WhiteBigButton>Try it online</WhiteBigButton>
            <WhiteBigButton>Download</WhiteBigButton>
          </CenteredRow>
        </BannerContainer>
      </div>
    );
  }
}
