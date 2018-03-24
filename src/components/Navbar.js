import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { media } from '../lib/media';

import github from '../img/github-icon.svg';
import logo from '../img/logo-white.svg';
import background from '../img/background.png';

const NavigationBar = styled.nav`
  width: 100%;
  position: fixed;
  z-index: 100;

  background-image: ${props =>
    props.transparent ? 'none' : `url(${background})`};
  background-size: cover;

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
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  ${media.tablet`
    display: block;
  `};
`;

const NavLink = styled(Link)`
  color: white;
  line-height: 3.25rem;
  padding: 0 8px;
  position: relative;

  ${media.tablet`
    display: block;
    line-height: 1.25rem;
    padding: 5px 8px;
  `};

  &:hover {
    color: white;
  }
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

export const NavBarSpacer = styled.div`
  height: 60px;
`;

class Navbar extends React.Component {
  state = {
    transparent: true,
  };

  componentDidMount() {
    //eslint-disable-next-line
    if (typeof window !== 'undefined') {
      //eslint-disable-next-line
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    //eslint-disable-next-line
    if (typeof window !== 'undefined') {
      //eslint-disable-next-line
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    //eslint-disable-next-line
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({
      transparent: yOffset < 35, //eslint-disable-line
    });
  };

  render() {
    const { t } = this.props;
    const { transparent, open } = this.state;

    return (
      <NavigationBar transparent={transparent}>
        <Container>
          <LogoContainer>
            <Link to="/">
              <img src={logo} alt="GDevelop" style={{ width: '200px' }} />
            </Link>
          </LogoContainer>
          <LeftContainer>
            <NavLink to="/features">{t('Features')}</NavLink>
            <NavLink to="/games-showcase">{t('Games')}</NavLink>
            <NavLink to="/education">{t('Education')}</NavLink>
          </LeftContainer>
          <RightContainer>
            <NavLink to="http://wiki.compilgames.net/doku.php/gdevelop5/start">
              {t('Tutorials')}
            </NavLink>
            <NavLink to="http://forum.compilgames.net">
              {t('Community')}
            </NavLink>
            <NavLink to="https://github.com/4ian/GD">
              <Icon src={github} alt="Github" />
            </NavLink>
          </RightContainer>
        </Container>
      </NavigationBar>
    );
  }
}

export default Navbar;
