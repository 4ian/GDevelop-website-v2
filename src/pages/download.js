import React from 'react';
import Helmet from 'react-helmet';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faWindows from '@fortawesome/fontawesome-free-brands/faWindows';
import faApple from '@fortawesome/fontawesome-free-brands/faApple';
import faLinux from '@fortawesome/fontawesome-free-brands/faLinux';
import faChrome from '@fortawesome/fontawesome-free-brands/faChrome';

import Navbar, { NavBarSpacer } from '../components/Navbar';
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
            <Helmet
              title={t(
                'GDevelop - Create games without programming - Open source HTML5 and native game creator'
              )}
            />
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteBigTitle>{t('Download GDevelop')}</WhiteBigTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop is free and can be used for profit or non-profit game making.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <Spacer height="20px" />
            <TransparentContainer>
              <Paragraph>
                {t(
                  'GDevelop runs on Windows, macOS and most recent Linux distributions. You can also try it online using Chrome, Firefox or another recent web browser.'
                )}
              </Paragraph>
              <CenteredRow>
                <BigButton to={config.gdevelopWindowsUrl}>
                  <FontAwesomeIcon icon={faWindows} /> Windows
                </BigButton>
                <BigButton to={config.gdevelopMacOSUrl}>
                  <FontAwesomeIcon icon={faApple} /> macOS
                </BigButton>
                <BigButton to={config.gdevelopLinuxUrl}>
                  <FontAwesomeIcon icon={faLinux} /> Linux
                </BigButton>
                <BigGhostButton to={config.onlineEditorUrl} target="_blank">
                <FontAwesomeIcon icon={faChrome} /> {t('Try it online')}
                </BigGhostButton>
              </CenteredRow>
              <Paragraph>
                {t('To create your first game, start by reading a tutorial:')}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/platform-game/start"
                  target="_blank"
                >
                  {t('Create a platformer game')}
                </BigGhostButton>
                <BigGhostButton
                  to="http://wiki.compilgames.net/doku.php/gdevelop5/tutorials/tank-shooter"
                  target="_blank"
                >
                  {t('Create a tank shooter game')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Contribute to GDevelop')}</BigTitle>
              <Paragraph>
                {t(
                  'Gdevelop is an open-source project. You can get involved in the community to improve it!'
                )}
              </Paragraph>
              <CenteredRow>
                <BigButton to={'/contribute/'}>
                  {t('Learn how to contribute')}
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
