import React from 'react';
import Helmet from 'react-helmet';
import Navbar, { NavBarSpacer } from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';

import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import MakeGameBanner from '../components/MakeGameBanner';

import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Column from '../components/Grid/Column';
import GameThumbnail from '../components/GameThumbnail';
import GameTitle from '../components/GameTitle';
import BubBanner from '../components/BubBanner';
import Paragraph from '../components/Paragraph';
import BigGhostButton from '../components/BigGhostButton';
import BigTitle from '../components/BigTitle';
import Spacer from '../components/Grid/Spacer';

const submitGameBody = `
Hi all!

I made/know a game made with GDevelop and I think it would be great to have it on the website.

## Screenshots

=> Insert one or more screenshots. Make sure they are extra pretty! :)

## Name, links and details

=> Please enter here your name, the game name and a link to download or play to it.
`;

const games = [
  {
    imageSrc: require('../img/games/big_kungfu.png'),
    title: 'Endless Kung-Fu',
    author: 'NetDancer Games',
    link:
      'https://play.google.com/store/apps/details?id=com.netdancergames.endlesskungfu',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_megapanicpixel.jpg'),
    title: 'Mega Panic Pixel',
    author: 'NanoSoft',
    link: 'http://gamejolt.com/games/arcade/mega-panic-pixel-alpha-wip/42664/',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_hyperspace.jpg'),
    title: 'Hyperspace Dogfights',
    author: ' Sleeper_Games',
    link: 'http://steamcommunity.com/sharedfiles/filedetails/?id=892686140',
    linkType: 'Steam Greenlight',
  },
  {
    imageSrc: require('../img/games/big_iletait.png'),
    title: 'Il etait...',
    author: 'Vivet, Bravo & Corbel',
    link: 'http://www.witly.fr/portfolio/html5gamejam/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_lotus.png'),
    title: 'Lotus Meditation',
    author: 'YogaPlay',
    link: 'http://gamejolt.com/games/lotus-meditation/107904',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_driftroads.jpg'),
    title: 'Drift Roads',
    author: 'donut_prod',
  },
  {
    imageSrc: require('../img/games/big_euf.jpg'),
    title: 'Eternity Under Fire',
    author: '4ian',
  },
  {
    imageSrc: require('../img/games/big_tva.png'),
    title: 'Tank Versus Alien',
    author: 'JohNy',
    link: 'http://tva.clay.io/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_dix.png'),
    title: 'DIX',
    author: 'TheFrogStudio.net',
    link: 'http://dix.thefrogstudio.net/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_bios.jpg'),
    title: 'Blazing Inferno of Space',
    author: 'MillionthVector',
    link: 'http://www.compilgames.net/dl/BIoS.zip',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_eccedeus.jpg'),
    title: 'Ecce Deus',
    author: '4ian',
    link: 'http://www.compilgames.net/eccedeus',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_bzombies.jpg'),
    title: 'Bloody Zombies',
    author: 'donut_prod',
    link: 'http://www.fdumortier.com/games/Bloody zombies.exe',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_mathepferd.jpg'),
    title: 'Mathe Pferd',
    author: 'Trancefer Lane',
    link: 'http://trancefer.wmw.cc/index.php/mathepferd',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_minotaure.jpg'),
    title: 'Minotaure',
    author: 'Juhlenedni',
  },
  {
    imageSrc: require('../img/games/big_run.png'),
    title: 'Run',
    author: 'graphichorse',
    link: 'http://www.graphichorsegames.com/p/run.html',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_stg.png'),
    title: 'Super Thomas Galaxy',
    author: 'Blady and ThomasCVB',
    link: 'http://blady.fr/stg/',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_gleamy.png'),
    title: 'Gleamy',
    author: 'livekontesk',
    link: 'http://www.compilgames.net/dl/hosted/gleamy_demo.rar',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_modelo.png'),
    title: 'Modelo',
    author: 'AjidoDm',
    link: 'http://www.compilgames.net/dl/hosted/Modelo.exe',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_pixelblack.jpg'),
    title: 'Pixel Black',
    author: 'EMKBRO',
    link: 'http://gamejolt.com/games/platformer/pixelblack/44361/',
    linkType: 'download',
  },
  {
    imageSrc: require('../img/games/big_burgersenfolie.jpg'),
    title: 'Burgers en folie',
    author: 'Fax',
    link: 'http://www.terre-et-glace.com/projets/Burgers%20En%20Folie/jeu/html',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_keytonowhere.jpg'),
    title: 'Key To Nowhere',
    author: 'Ricardo Graca',
    link: 'http://rizomatico.org/games/keytonowhere/',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_introspectus.jpg'),
    title: 'Introspectus',
    author: 'SquameGames',
    link: 'https://squamegames.itch.io/introspectus',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_discolors.png'),
    title: 'Discolors',
    author: 'Ousaf',
    link: 'http://publishers.softgames.com/en/games/discolors',
    linkType: 'play',
  },
  {
    imageSrc: require('../img/games/big_ruxby.jpg'),
    title: 'Ruxby',
    author: 'Twisted Kitty',
    link: 'http://legion-of-doom.wix.com/twistedkitty',
    linkType: 'play',
  },
];

const groupByNUple = (array, n) => {
  if (n < 1) return array;

  const result = [];
  let nUpleIndex = 0;
  let currentNUple;
  for (let i = 0; i < array.length; ++i) {
    if (nUpleIndex === 0) {
      currentNUple = [];
    }

    currentNUple.push(array[i]);
    nUpleIndex++;
    if (nUpleIndex >= n) {
      result.push(currentNUple);
      nUpleIndex = 0;
    }
  }

  return result;
};

export default class EducationPage extends React.Component {
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
              <WhiteBigTitle>{t('Games showcase')}</WhiteBigTitle>
              <WhiteParagraph>
                {t(
                  'Here are a few games created with GDevelop. The next one should be yours!'
                )}
              </WhiteParagraph>
            </BannerContainer>
            <BubBanner />
            <TransparentContainer>
              {groupByNUple(games, 2).map((groupedGames, index) => (
                <Row key={index}>
                  {groupedGames.map((game, index) => (
                    <Column key={`${game.title}-${game.author}`}>
                      <GameThumbnail src={game.imageSrc} />
                      <GameTitle textAlign="center">
                        <b>{game.title}</b> {t('by')} {game.author}
                      </GameTitle>
                      {!!game.link && (
                        <CenteredRow>
                          <BigButton to={game.link}>
                            {game.linkType === 'play'
                              ? t('Play')
                              : game.linkType === 'download'
                                ? t('Download')
                                : game.linkType}
                          </BigButton>
                        </CenteredRow>
                      )}
                    </Column>
                  ))}
                </Row>
              ))}
              <BigTitle>{t('Made a nice game with GDevelop?')}</BigTitle>
              <Paragraph>
                {t(
                  "We'll love to know about your game and add it here. Make sure you have beautiful screenshots ready and that the game is high quality :)"
                )}
              </Paragraph>
              <CenteredRow>
                <BigGhostButton
                  to={`https://github.com/4ian/GDevelop-website/issues/new?body=${encodeURIComponent(
                    submitGameBody
                  )}&title=Game%20for%20the%20game%20showcase`}
                >
                  {t('Submit your game')}
                </BigGhostButton>
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
