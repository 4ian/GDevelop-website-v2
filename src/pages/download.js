import React from 'react';
import Paragraph from '../components/Paragraph';
import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';

import CenteredRow from '../components/Grid/CenteredRow';
import Spacer from '../components/Grid/Spacer';
import BigGhostButton from '../components/BigGhostButton';

export default class DownloadPage extends React.Component {
  render() {
    return (
      <div>
        <BannerContainer>
          <WhiteBigTitle>Download GDevelop</WhiteBigTitle>
          <WhiteParagraph>
            GDevelop is free and can be used for profit or non-profit game
            making.
          </WhiteParagraph>
        </BannerContainer>
        <Spacer height="20px" />
        <TransparentContainer>
          <Paragraph>
            GDevelop runs on Windows, macOS and most recent Linux distributions.
            You can also try it online using Chrome, Firefox or another recent
            web browser.
          </Paragraph>
          <CenteredRow>
            <BigButton href="TODO">Windows</BigButton>
            <BigButton href="TODO">macOS</BigButton>
            <BigButton href="TODO">Linux</BigButton>
            <BigGhostButton href="TODO">Try it online</BigGhostButton>
          </CenteredRow>
          <Paragraph>
            To create your first game, start by reading a tutorial:
          </Paragraph>
          <CenteredRow>
            <BigGhostButton
              href="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/platform-game/start"
              target="_blank"
            >
              Create a platformer game
            </BigGhostButton>
            <BigGhostButton
              href="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/tank-shooter"
              target="_blank"
            >
              Create a tank shooter game
            </BigGhostButton>
          </CenteredRow>
        </TransparentContainer>
        <Spacer height="50px" />
      </div>
    );
  }
}
