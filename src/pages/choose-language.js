import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';
import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';
import TransparentContainer from '../components/Containers/TransparentContainer';
import Spacer from '../components/Grid/Spacer';
import CenteredRow from '../components/Grid/CenteredRow';
import BigButton from '../components/BigButton';
import config from '../config';
import BigGhostButton from '../components/BigGhostButton';

const NotFoundPage = props => (
  <PageContainer {...props.pathContext}>
    {t => (
      <React.Fragment>
        <Helmet title="GDevelop - Choose your language" />
        <Navbar t={t} noTransparency />
        <Spacer height="200px" />
        <TransparentContainer>
          <BigTitle>Choose your language</BigTitle>
          <Paragraph>GDevelop website is available in:</Paragraph>
          <CenteredRow>
            {props.pathContext.localeNamesAndPaths.map(({ name, path }) => (
              <BigGhostButton to={path} noLangPathPrefix>
                {name}
              </BigGhostButton>
            ))}
          </CenteredRow>
          <Paragraph>
            Translations are done by contributors and volunteers. Want to help
            translating GDevelop website to your language?
          </Paragraph>
          <CenteredRow>
            <BigButton to={config.websiteCrowdinUrl}>
              Help us to translate GDevelop website
            </BigButton>
          </CenteredRow>
        </TransparentContainer>
        <Spacer height="200px" />
        <Footer t={t} />
      </React.Fragment>
    )}
  </PageContainer>
);

export default NotFoundPage;
