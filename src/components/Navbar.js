import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';

import Link from './Link';
import { media } from '../lib/media';
import config from '../config';

import logo from '../img/logo-white.svg';
import background from '../img/background.jpg';

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
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 10px;

  ${media.tablet`
    display: block;
  `};
`;

const ItemsContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${media.tablet`
    display: ${props => (props.open ? 'block' : 'none')};
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  `};
`;

const MenuIcon = styled.a`
  display: none;
  color: white;
  font-size: 40px;

  ${media.tablet`
    display: inline-block;
  `};

  &:hover {
    color: white;
  }
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
    open: false,
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

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    const { t, noTransparency } = this.props;
    const { transparent, open } = this.state;

    return (
      <NavigationBar transparent={transparent && !open && !noTransparency}>
        <Container>
          <LogoContainer>
            <Link to="/">
              <img src={logo} alt="GDevelop" style={{ width: '200px' }} />
            </Link>
            <MenuIcon onClick={this.toggleOpen}>
              {open ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </MenuIcon>
          </LogoContainer>
          <ItemsContainer open={open}>
            <LeftContainer>
              <NavLink to="/features">{t('Features')}</NavLink>
              <NavLink to="/games-showcase">{t('Games')}</NavLink>
              <NavLink to="/education">{t('Education')}</NavLink>
            </LeftContainer>
            <RightContainer>
              <NavLink
                to={config.wikiUrl}
                category="wiki"
                label="navbar-tutorials"
              >
                {t('Tutorials')}
              </NavLink>
              <NavLink to="/download">{t('Download')}</NavLink>
              <NavLink
                to={config.githubUrl}
                title="GDevelop GitHub"
                category="github"
                action="opened"
                label="icon"
              >
                <FontAwesomeIcon icon={faGithub} />
              </NavLink>
              <NavLink
                to="/choose-language"
                noLangPathPrefix
                title="Choose language"
              >
                <FontAwesomeIcon icon={faLanguage} />
              </NavLink>
            </RightContainer>
          </ItemsContainer>
        </Container>
      </NavigationBar>
    );
  }
}

export default Navbar;
