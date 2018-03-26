import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

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
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet
              title={t(
                'GDevelop - Create games without programming - Open source HTML5 and native game creator'
              )}
            >
              <html lang={this.props.pathContext.localeCode} />
            </Helmet>
            <Navbar t={t} />
            <BannerContainer>
              <NavBarSpacer />
              <WhiteBigTitle>{t('Fully featured')}</WhiteBigTitle>
              <WhiteParagraph>
                {t(
                  'GDevelop is bundled with dozens of features to imagine and create any kind of games.'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <TransparentContainer>
              <BigTitle>{t('Objects for your games')}</BigTitle>
              <List>
                <ListItem>
                  <b>{t('Sprites')}</b> {t('with multiple animations')}
                </ListItem>
                <ListItem>{t('"9 patch" and tiled sprites')}</ListItem>
                <ListItem>{t('Text objects')}</ListItem>
                <ListItem>
                  {t('Draw custom shapes on screen with the Shape Painter')}
                </ListItem>
                <ListItem>{t('Support for custom collision masks')}</ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/objects">
                  {t('Read the documentation for all objects')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Add behaviors to your game objects')}</BigTitle>
              <List>
                <ListItem>
                  <b>{t('Physics engine')}</b> -{' '}
                  <i>{t('Add realistic behavior to your objects')}</i>
                </ListItem>
                <ListItem>
                  {t('Pathfinding')} -{' '}
                  <i>{t('Have your objects move and avoiding obstacles')}</i>
                </ListItem>
                <ListItem>{t('Top-down movement')}</ListItem>
                <ListItem>
                  <b>{t('Platformer engine')}</b> -{' '}
                  <i>{t('create platformer games in a breeze')}</i>
                </ListItem>
                <ListItem>
                  {t('Draggable objects')} -{' '}
                  <i>
                    {t('quickly make your objects draggable with mouse/touch')}
                  </i>
                </ListItem>
                <ListItem>
                  {t(
                    'And more, to automate current tasks and behaviors in a few clicks!'
                  )}
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/behaviors">
                  {t('Read the documentation for all behaviors')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Design advanced levels and interfaces')}</BigTitle>
              <List>
                <ListItem>
                  {t('The scene editor lets you visually edit your levels')}
                </ListItem>
                <ListItem>
                  {t('Support for multiple layers')} -{' '}
                  <i>{t('Add interfaces and create parallax effects')}</i>
                </ListItem>
                <ListItem>
                  {t('Create your levels dynamically with external layouts')}
                </ListItem>
                <ListItem>
                  {t('Integrated debugger and performance profilers')} -{' '}
                  <i>{t('coming soon!')}</i>
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/interface">
                  {t('Read the documentation for editors')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Make desktop & mobile-ready games')}</BigTitle>
              <List>
                <ListItem>
                  {t('Save player data in browser/local storage')}
                </ListItem>
                <ListItem>
                  {t('Full support for sound effects and music')}
                </ListItem>
                <ListItem>
                  {t('Support for touchscreens & multi-touch')}
                </ListItem>
              </List>
              <BigTitle>
                {t('Build ambitious games with advanced features')}
              </BigTitle>
              <List>
                <ListItem>
                  {t('Communicate with external websites using HTTP requests')}
                </ListItem>
                <ListItem>
                  {t('Use advanced events: loops, for-each and even functions')}
                </ListItem>
                <ListItem>
                  {t(
                    'Manipulate variables with arbitrary complex structures and even JSON support'
                  )}
                </ListItem>
                <ListItem>
                  {t(
                    'You can even use JavaScript to code some parts of your game!'
                  )}
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/events">
                  {t('Read the documentation about events')}
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>{t('Deploy your game everywhere')}</BigTitle>
              <List>
                <ListItem>
                  <b>{t('One click export for Android')}</b>
                </ListItem>
                <ListItem>
                  <b>{t('Export your game for the web in one click')}</b>
                </ListItem>
                <ListItem>
                  <b>
                    {t(
                      'Export your game to iOS (with PhoneGap Build or Cordova)'
                    )}
                  </b>
                </ListItem>
                <ListItem>
                  {t(
                    'Publish your game on Kongregate, Itch.io and other gaming website!'
                  )}
                </ListItem>
                <ListItem>
                  {t(
                    'Export as a stand-alone executable game for Windows, macOS and Linux'
                  )}{' '}
                  - <i>{t('Coming Soon!')}</i>
                </ListItem>
              </List>
              <CenteredRow>
                <BigGhostButton to="http://wiki.compilgames.net/doku.php/gdevelop5/publishing">
                  {t('Learn how to publish your game')}
                </BigGhostButton>
              </CenteredRow>
            </TransparentContainer>
            <BottomCenteredBigImage
              src={chromeWithGame}
              alt="Make HTML5 games for Chrome, Firefox, Safari, iOS, Android, Edge and other modern browsers"
            />
            <MakeGameBanner />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
