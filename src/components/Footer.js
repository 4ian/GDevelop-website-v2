import React from 'react';
import styled from 'styled-components';
import { Trans } from 'react-i18next';
import Link from './Link';
import { media } from '../lib/media';
import Row from './Grid/Row';
import Column from './Grid/Column';
import footerImage from '../img/background-platformer-level.png';

const FooterContainer = styled.div`
  background-color: #f7f7f7;
  background-image: url(${footerImage});
  background-size: contain;
  background-position: bottom;
  background-repeat: repeat-x;
  padding: 30px;
`;

const ContentContainer = styled.div`
  margin: auto;
  width: 720px;
  padding: 10px;
  background-color: rgba(247, 247, 247, 0.88);

  ${media.tablet`
    width: auto;
  `};
`;

const FooterText = styled.p`
  font-size: 24px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #6a6a6a;
  margin-bottom: 15px;
  margin-top: 10px;
`;

const FooterLink = styled(Link)`
  font-size: 20px;
  color: #3c4698;
  font-weight: 600;
  display: block;
`;

const CopyrightText = styled.p`
  font-size: 16px;
  font-family: 'Roboto', Arial, sans-serif;
  color: #6a6a6a;
  margin-top: 10px;
`;

const CopyrightLink = styled.a`
  font-weight: bold;
  color: #3c4698;
`;

export default ({ t }) => (
  <FooterContainer>
    <ContentContainer>
      <FooterText>
        {t(
          'GDevelop is an open-source game creator. It can be used by anyone to create any kind of 2D games.'
        )}'
      </FooterText>
      <Row>
        <Column>
          <FooterLink to="/download/">{t('Download the editor')}</FooterLink>
          <FooterLink to="https://editor.gdevelop-app.com">
            {t('Online game editor')}
          </FooterLink>
          <FooterLink to="http://forum.compilgames.net">
            {t('Community forums')}
          </FooterLink>
          <FooterLink to="http://wiki.compilgames.net/doku.php/gdevelop5/start">
            {t('Documentation & tutorials')}
          </FooterLink>
        </Column>
        <Column>
          <FooterLink to="/features/">{t('Features')}</FooterLink>
          <FooterLink to="/education/">{t('Education')}</FooterLink>
          <FooterLink to="/games-showcase/">{t('Games showcase')}</FooterLink>
          <FooterLink to="/contribute/">{t('Contribute')}</FooterLink>
        </Column>
      </Row>
      <CopyrightText>
        <Trans i18nKey="GDevelop was created [...][content]">
          GDevelop was created with ♥ by{' '}
          <CopyrightLink href="https://www.linkedin.com/in/florianrival/">
            Florian Rival
          </CopyrightLink>{' '}
          with{' '}
          <CopyrightLink href="https://github.com/4ian/GD/graphs/contributors/">
            contributors
          </CopyrightLink>{' '}
          adding features, fixing bugs, sending new examples, improving the
          wiki, and helping each other on the forums
        </Trans>
      </CopyrightText>
    </ContentContainer>
  </FooterContainer>
);
