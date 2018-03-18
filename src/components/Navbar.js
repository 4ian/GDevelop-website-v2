import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { media } from '../lib/media';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const NavigationBar = styled.nav`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  background-color: #f7f7f7;
  ${media.tablet`
    padding-top: 5px;
    margin-left: 0;
    margin-right: 0;
  `};
`;

const Container = styled.div`
  align-items: stretch;
  display: flex;
  width: 100%;

  ${media.tablet`
    display: block;
  `};
`;

const NavLink = styled.a`
  color: #6a6a6a;
  line-height: 3.25rem;
  padding: 0.5rem 1rem;
  position: relative;

  ${media.tablet`
    display: block;
    line-height: 1.25rem;
  `};
`;

const LeftContainer = styled.div`
  justify-content: flex-start;

  ${media.tablet`
    display: block;
  `};
`;

const RightContainer = styled.div`
  justify-content: flex-end;
  margin-left: auto;

  ${media.tablet`
    display: block;
  `};
`;

const LogoContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  ${media.tablet`
    display: block;
  `};
`;

const Icon = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
`;

const Navbar = () => (
  <NavigationBar>
    <Container>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="GDevelop" style={{ width: '200px' }} />
        </Link>
      </LogoContainer>
      <LeftContainer>
        <Link to="/features">
          <NavLink>Features</NavLink>
        </Link>
        <Link to="/games-showcase">
          <NavLink>Games showcase</NavLink>
        </Link>
        <Link to="/education">
          <NavLink>Education</NavLink>
        </Link>
      </LeftContainer>
      <RightContainer>
        <NavLink href="http://wiki.compilgames.net/doku.php/gdevelop5/start">
          Tutorials
        </NavLink>
        <NavLink href="http://forum.compilgames.net">Community</NavLink>
        <NavLink
          href="https://github.com/4ian/GD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <img src={github} alt="Github" />
          </Icon>
        </NavLink>
      </RightContainer>
    </Container>
  </NavigationBar>
);

export default Navbar;
