import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import Paragraph from '../components/Paragraph';
import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import config from '../config';

import CenteredRow from '../components/Grid/CenteredRow';
import Spacer from '../components/Grid/Spacer';
import BigGhostButton from '../components/BigGhostButton';
import BigTitle from '../components/BigTitle';

export default class DownloadPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet title="GDevelop - Create games without programming - Open source HTML5 and native game creator" />
            <Navbar t={t} />
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
                GDevelop runs on Windows, macOS and most recent Linux
                distributions. You can also try it online using Chrome, Firefox
                or another recent web browser.
              </Paragraph>
              <CenteredRow>
                <BigButton to={config.gdevelopWindowsUrl}>Windows</BigButton>
                <BigButton to={config.gdevelopMacOSUrl}>macOS</BigButton>
                <BigButton to={config.gdevelopLinuxUrl}>Linux</BigButton>
                <BigGhostButton to={config.onlineEditorUrl} target="_blank">
                  Try it online
                </BigGhostButton>
              </CenteredRow>
              <Paragraph>
                To create your first game, start by reading a tutorial:
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/platform-game/start"
                  target="_blank"
                >
                  Create a platformer game
                </BigGhostButton>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/tank-shooter"
                  target="_blank"
                >
                  Create a tank shooter game
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>Contribute to GDevelop</BigTitle>
              <Paragraph>
                Gdevelop is an open-source project. You can get involved in the
                community to improve it!
              </Paragraph>
              <CenteredRow>
                <BigButton to={'/contribute/'}>
                  Learn how to contribute
                </BigButton>
              </CenteredRow>
            </TransparentContainer>
            <Spacer height="50px" />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
