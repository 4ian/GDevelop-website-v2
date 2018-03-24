import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigTitle from '../components/BigTitle';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';

import Spacer from '../components/Grid/Spacer';
import MakeGameBanner from '../components/MakeGameBanner';
import Paragraph from '../components/Paragraph';
import CenteredRow from '../components/Grid/CenteredRow';
import BigButton from '../components/BigButton';
import BigGhostButton from '../components/BigGhostButton';
import config from '../config';

export default class FeaturesPage extends React.Component {
  render() {
    return (
      <PageContainer {...this.props.pathContext}>
        {t => (
          <React.Fragment>
            <Helmet title="GDevelop - Create games without programming - Open source HTML5 and native game creator" />
            <Navbar t={t} />
            <BannerContainer>
              <WhiteBigTitle>Contribute to GDevelop</WhiteBigTitle>
              <WhiteParagraph>
                GDevelop is an open-source project (even this website): anyone
                can contribute and improve the software!
              </WhiteParagraph>
            </BannerContainer>
            <Spacer height="20px" />
            <TransparentContainer>
              <Paragraph>
                There are multiple ways you can contribute to GDevelop,
                depending on your time, your skills and what you're interested
                in.
              </Paragraph>
              <BigTitle>Help to translate GDevelop</BigTitle>
              <Paragraph>
                GDevelop and the website can be translated in your language!
                Translations are done on a website where everyone can get
                involved.
              </Paragraph>
              <CenteredRow>
                <BigButton to={config.crowdinUrl}>
                  Help us by translating GDevelop!
                </BigButton>
              </CenteredRow>
              <BigTitle>Help to develop GDevelop</BigTitle>
              <Paragraph>
                It's easy to get the source code of GDevelop and start improving
                things!
              </Paragraph>
              <CenteredRow>
                <BigButton to={config.githubUrl}>
                  Contribute on GitHub
                </BigButton>
                <BigButton to={config.githubUrl}>
                  Edit the website on GitHub
                </BigButton>
                <BigGhostButton to={config.developmentRoadmapUrl}>
                  Check the development roadmap
                </BigGhostButton>
              </CenteredRow>
              <BigTitle>Get involved in the community</BigTitle>
              <Paragraph>
                The forum and the Discord chat are the place to get and provide
                help to other GDevelop users!
              </Paragraph>
              <CenteredRow>
                <BigButton to={config.forumUrl}>
                  Go to the community forum
                </BigButton>
                <BigButton to={config.discordUrl}>
                  Open the Discord chat
                </BigButton>
              </CenteredRow>
              <BigTitle>Write tutorials, record videos</BigTitle>
              <Paragraph>
                For most beginners and even advanced users, tutorials and help
                page are the most valuable resources to create great games
                quickly. On the wiki, you can write tutorials or improve
                existing ones.
              </Paragraph>
              <CenteredRow>
                <BigButton to={config.wikiUrl}>
                  Contribute to the wiki
                </BigButton>
              </CenteredRow>
            </TransparentContainer>
            <Spacer height="50px" />
            <MakeGameBanner />
            <Footer t={t} />
          </React.Fragment>
        )}
      </PageContainer>
    );
  }
}
