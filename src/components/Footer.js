import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import { Trans } from 'react-i18next';
import Link from './Link';
import { media } from '../lib/media';
import Row from './Grid/Row';
import Column from './Grid/Column';
import footerBackground from '../img/footer-background.jpg';
import config from '../config';
import CenteredRow from './Grid/CenteredRow';

const FooterContainer = styled.div`
  background-color: #423352;
  background-image: url(${footerBackground});
  background-size: contain;
  background-position: top;
  background-repeat: repeat-x;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
`;

const ContentContainer = styled.div`
  margin: auto;
  width: 720px;
  padding: 20px;
  background-color: rgba(66, 51, 82, 0.88);

  ${media.tablet`
    width: auto;
  `};
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 24px;
  font-family: 'Roboto', Arial, sans-serif;
  color: white;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const FooterLink = styled(Link)`
  font-size: 20px;
  color: #387eca;
  font-weight: 600;
  display: block;

  &:hover {
    color: #66ace3;
  }
`;

const CopyrightText = styled.p`
  font-size: 16px;
  font-family: 'Roboto', Arial, sans-serif;
  color: white;
  margin-top: 10px;
`;

const CopyrightLink = styled.a`
  font-weight: bold;
  color: #387eca;

  &:hover {
    color: #66ace3;
  }
`;

export default ({ t }) => (
  <FooterContainer>
    <ContentContainer>
      <FooterText>
        {t(
          'GDevelop is an open-source game creator. It can be used by anyone to create any kind of 2D games.'
        )}
      </FooterText>
      <Row>
        <Column>
          <FooterLink to="/choose-language" noLangPathPrefix>
            <FontAwesomeIcon icon={faLanguage} />{' '}
            {t('This website in your language')}
          </FooterLink>
          <FooterLink to="/download/">{t('Download the editor')}</FooterLink>
          <FooterLink
            to={config.onlineEditorUrl}
            alt="_blank"
            rel="noopener"
            category="webapp"
            label="webapp"
          >
            {t('Online game editor')}
          </FooterLink>
          <FooterLink
            to={config.forumUrl}
            category="forum"
            label="footer-community-forum"
          >
            {t('Community forums')}
          </FooterLink>
          <FooterLink
            to={config.wikiUrl}
            category="wiki"
            label="footer-documentation-tutorials"
          >
            {t('Documentation & tutorials')}
          </FooterLink>
          <FooterLink to="/features/">{t('Features')}</FooterLink>
        </Column>
        <Column>
          <FooterLink to="/education/">{t('Education')}</FooterLink>
          <FooterLink to="/games-showcase/">{t('Games showcase')}</FooterLink>
          <FooterLink to="/contribute/">{t('Contribute')}</FooterLink>
          <FooterLink
            to={config.facebookPageUrl}
            category="facebook"
            label="footer-facebook-page"
          >
            {t('Facebook page')}
          </FooterLink>
          <FooterLink
            to={config.twitterUrl}
            category="twitter"
            label="footer-twitter-page"
          >
            {t('Twitter')}
          </FooterLink>
        </Column>
      </Row>
      <CopyrightText>
        {t('GDevelop was created with love by')}{' '}
        <CopyrightLink
          href="https://www.linkedin.com/in/florianrival/"
          category="florian-rival"
          label="footer-name"
        >
          Florian Rival
        </CopyrightLink>
      </CopyrightText>
      <CopyrightText>
        {t('Thanks to the')}{' '}
        <CopyrightLink
          href="https://github.com/4ian/GD/graphs/contributors/"
          category="github"
          label="footer-contributors"
        >
          contributors
        </CopyrightLink>{' '}
        {t(
          'who added features, fixed bugs, sent new examples, wrote tutorials, and helped the community.'
        )}
      </CopyrightText>
    </ContentContainer>
  </FooterContainer>
);
