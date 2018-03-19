import React from 'react';
import BigTitle from '../components/BigTitle';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';

import chromeWithGame from '../img/chrome-with-game.png';
import { List, ListItem } from '../components/List';
import MakeGameBanner from '../components/MakeGameBanner';
import BottomCenteredBigImage from '../components/BottomCenteredBigImage';
import BigGhostButton from '../components/BigGhostButton';
import CenteredRow from '../components/Grid/CenteredRow';

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
            <ListItem>
              <b>Sprites</b> with multiple animations
            </ListItem>
            <ListItem>"9 patch" and tiled sprites</ListItem>
            <ListItem>Text objects</ListItem>
            <ListItem>
              Draw <b>custom shapes</b> on screen with the Shape Painter
            </ListItem>
            <ListItem>Support for custom collision masks</ListItem>
          </List>
          <CenteredRow>
            <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/objects">
              Read the documentation for all objects
            </BigGhostButton>
          </CenteredRow>
          <BigTitle>Add behaviors to your game objects</BigTitle>
          <List>
            <ListItem>
              <b>Physics engine</b> -{' '}
              <i>Add realistic behavior to your objects</i>
            </ListItem>
            <ListItem>
              Pathfinding - <i>Have your objects move and avoiding obstacles</i>
            </ListItem>
            <ListItem>Top-down movement</ListItem>
            <ListItem>
              <b>Platformer</b> engine -{' '}
              <i>create platformer games in a breeze</i>
            </ListItem>
            <ListItem>
              Draggable objects -{' '}
              <i>quickly make your objects draggable with mouse/touch</i>
            </ListItem>
            <ListItem>
              And more, to automate current tasks and behaviors in a few clicks!
            </ListItem>
          </List>
          <CenteredRow>
            <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/behaviors">
              Read the documentation for all behaviors
            </BigGhostButton>
          </CenteredRow>
          <BigTitle>Design advanced levels and interfaces</BigTitle>
          <List>
            <ListItem>
              The scene editor lets you <b>visually edit your levels</b>
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
          </List>
          <CenteredRow>
            <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/interface">
              Read the documentation for editors
            </BigGhostButton>
          </CenteredRow>
          <BigTitle>Make desktop &amp; mobile-ready games</BigTitle>
          <List>
            <ListItem>Save player data in browser/local storage</ListItem>
            <ListItem>Full support for sound effects and music</ListItem>
            <ListItem>
              Support for <b>touchscreens</b> & multi-touch
            </ListItem>
          </List>
          <BigTitle>Build ambitious games with advanced features</BigTitle>
          <List>
            <ListItem>
              Communicate with external websites using HTTP requests
            </ListItem>
            <ListItem>
              Use advanced events: <b>loops</b>, for-each and even functions
            </ListItem>
            <ListItem>
              Manipulate variables with arbitrary complex structures and even
              JSON support
            </ListItem>
            <ListItem>
              Use <b>Javascript</b> to code any part of your game
            </ListItem>
          </List>
          <CenteredRow>
            <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/events">
              Read the documentation about events
            </BigGhostButton>
          </CenteredRow>
          <BigTitle>Deploy your game everywhere</BigTitle>
          <List>
            <ListItem>
              One click export for <b>Android</b>
            </ListItem>
            <ListItem>Export your game for <b>the web</b> in one click</ListItem>
            <ListItem>
              Export your game to <b>iOS</b> (with PhoneGap Build or Cordova)
            </ListItem>
            <ListItem>
              Publish your game on Kongregate, Itch.io and other gaming website!
            </ListItem>
            <ListItem>
              Export as a stand-alone executable game for Windows, macOS and Linux - <i>Coming Soon!</i>
            </ListItem>
          </List>
          <CenteredRow>
            <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing">
              Learn how to publish your game
            </BigGhostButton>
          </CenteredRow>
        </TransparentContainer>
        <BottomCenteredBigImage src={chromeWithGame} />
        <MakeGameBanner />
      </div>
    );
  }
}
