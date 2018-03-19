import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
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
  width: 620px;
  padding: 10px;
  background-color: rgba(247, 247, 247, 0.8);

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

const FooterLink = styled.a`
  font-size: 20px;
  color: #4ab0e4;
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

export default () => (
  <FooterContainer>
    <ContentContainer>
      <FooterText>
        GDevelop is an open-source game creator. It can be used by anyone to
        create any kind of 2D games.
      </FooterText>
      <Row>
        <Column>
          <Link to="/download/">
            <FooterLink>Download the editor</FooterLink>
          </Link>
          <FooterLink href="https://editor.gdevelop-app.com">
            Online game editor
          </FooterLink>
          <FooterLink href="http://forum.compilgames.net">
            Community forums
          </FooterLink>
          <FooterLink href="http://wiki.compilgames.net/doku.php/gdevelop5/start">
            Documentation &amp; tutorials
          </FooterLink>
        </Column>
        <Column>
          <Link to="/features/">
            <FooterLink>Features</FooterLink>
          </Link>
          <Link to="/education/">
            <FooterLink>Education</FooterLink>
          </Link>
          <Link to="/games-showcase/">
            <FooterLink>Games showcase</FooterLink>
          </Link>
          <Link to="/contribute/">
            <FooterLink>Contribute</FooterLink>
          </Link>
        </Column>
      </Row>
      <CopyrightText>
        GDevelop was created with ♥ by{' '}
        <CopyrightLink href="https://www.linkedin.com/in/florianrival/">
          Florian Rival
        </CopyrightLink>{' '}
        with{' '}
        <CopyrightLink href="https://github.com/4ian/GD/graphs/contributors/">
          contributors
        </CopyrightLink>{' '}
        adding features, fixing bugs, sending new examples, improving the wiki,
        and helping each other on the forums
      </CopyrightText>
    </ContentContainer>
  </FooterContainer>
);
