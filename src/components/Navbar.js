import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { media } from '../lib/media';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

const NavigationBar = styled.nav`
  padding-top: 10px;
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

const NavLink = styled(Link)`
  color: #6a6a6a;
  line-height: 3.25rem;
  padding: 0 8px;
  position: relative;

  ${media.tablet`
    display: block;
    line-height: 1.25rem;
    padding: 5px 8px;
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

const Icon = styled.img`
  position: relative;
  height: 25px;
  width: 25px;
  top: 5px;
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
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/games-showcase">Games</NavLink>
        <NavLink to="/education">Education</NavLink>
      </LeftContainer>
      <RightContainer>
        <NavLink to="http://wiki.compilgames.net/doku.php/gdevelop5/start">
          Tutorials
        </NavLink>
        <NavLink to="http://forum.compilgames.net">Community</NavLink>
        <NavLink to="https://github.com/4ian/GD">
          <Icon src={github} alt="Github" />
        </NavLink>
      </RightContainer>
    </Container>
  </NavigationBar>
);

export default Navbar;
