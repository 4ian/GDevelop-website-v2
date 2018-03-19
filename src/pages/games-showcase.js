import React from 'react';
import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import WhiteBigButton from '../components/WhiteBigButton';

import Row from '../components/Grid/Row';
import CenteredRow from '../components/Grid/CenteredRow';
import Column from '../components/Grid/Column';
import GameThumbnail from '../components/GameThumbnail';
import GameThumbnailTitle from '../components/GameThumbnailTitle';
import Spacer from '../components/Grid/Spacer';

const games = [
  {
    imageSrc: require('../img/games/big_kungfu.png'),
    title: 'Endless Kung-Fu',
    author: 'NetDancer Games',
    link:
      'https://play.google.com/store/apps/details?id=com.netdancergames.endlesskungfu',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_megapanicpixel.jpg'),
    title: 'Mega Panic Pixel',
    author: 'NanoSoft',
    link: 'http://gamejolt.com/games/arcade/mega-panic-pixel-alpha-wip/42664/',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_hyperspace.jpg'),
    title: 'Hyperspace Dogfights',
    author: ' Sleeper_Games',
    link: 'http://steamcommunity.com/sharedfiles/filedetails/?id=892686140',
    linkTitle: 'Steam Greenlight',
  },
  {
    imageSrc: require('../img/games/big_iletait.png'),
    title: 'Il etait...',
    author: 'Vivet, Bravo & Corbel',
    link: 'http://www.witly.fr/portfolio/html5gamejam/',
    linkTitle: 'Play',
  },
  {
    imageSrc: require('../img/games/big_lotus.png'),
    title: 'Lotus Meditation',
    author: 'YogaPlay',
    link: 'http://gamejolt.com/games/lotus-meditation/107904',
    linkTitle: 'Play',
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
    linkTitle: 'Play',
  },
  {
    imageSrc: require('../img/games/big_dix.png'),
    title: 'DIX',
    author: 'TheFrogStudio.net',
    link: 'http://dix.thefrogstudio.net/',
    linkTitle: 'Play',
  },
  {
    imageSrc: require('../img/games/big_bios.jpg'),
    title: 'Blazing Inferno of Space',
    author: 'MillionthVector',
    link: 'http://www.compilgames.net/dl/BIoS.zip',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_eccedeus.jpg'),
    title: 'Ecce Deus',
    author: '4ian',
    link: 'http://www.compilgames.net/eccedeus',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_bzombies.jpg'),
    title: 'Bloody Zombies',
    author: 'donut_prod',
    link: 'http://www.fdumortier.com/games/Bloody zombies.exe',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_mathepferd.jpg'),
    title: 'Mathe Pferd',
    author: 'ttp://trancefer.wmw.cc/index.php/mathepferd',
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
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_stg.png'),
    title: 'Super Thomas Galaxy',
    author: 'Blady and ThomasCVB',
    link: 'http://blady.fr/stg/',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_gleamy.png'),
    title: 'Gleamy',
    author: 'livekontesk',
    link: 'http://www.compilgames.net/dl/hosted/gleamy_demo.rar',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_modelo.png'),
    title: 'Modelo',
    author: 'AjidoDm',
    link: 'http://www.compilgames.net/dl/hosted/Modelo.exe',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_pixelblack.jpg'),
    title: 'Pixel Black',
    author: 'EMKBRO',
    link: 'http://gamejolt.com/games/platformer/pixelblack/44361/',
    linkTitle: 'Download',
  },
  {
    imageSrc: require('../img/games/big_burgersenfolie.jpg'),
    title: 'Burgers en folie',
    author: 'Fax',
    link: 'http://www.terre-et-glace.com/projets/Burgers%20En%20Folie/jeu/html',
    linkTitle: 'Play',
  },
  {
    imageSrc: require('../img/games/big_keytonowhere.jpg'),
    title: 'Key To Nowhere',
    author: 'Ricardo Graca',
    link: 'http://rizomatico.org/games/keytonowhere/',
    linkTitle: 'Play',
  },
  {
    imageSrc: require('../img/games/big_introspectus.jpg'),
    title: 'Introspectus',
    author: 'SquameGames',
    link: 'https://squamegames.itch.io/introspectus',
    linkTitle: 'Play',
  },
  {
    imageSrc: require('../img/games/big_discolors.png'),
    title: 'Discolors',
    author: 'Ousaf',
    link: 'http://publishers.softgames.com/en/games/discolors',
    linkTitle: 'Play',
  },
  {
    imageSrc: require('../img/games/big_ruxby.jpg'),
    title: 'Ruxby',
    author: 'Twisted Kitty',
    link: 'http://legion-of-doom.wix.com/twistedkitty',
    linkTitle: 'Play',
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
      <div>
        <BannerContainer>
          <WhiteBigTitle>Games showcase</WhiteBigTitle>
          <WhiteParagraph>
            Here are a few games created with GDevelop. The next one should be
            yours!
          </WhiteParagraph>
        </BannerContainer>
        <Spacer height="50px" />
        <TransparentContainer>
          {groupByNUple(games, 2).map(groupedGames => (
            <Row>
              {groupedGames.map(game => (
                <Column>
                  <GameThumbnail src={game.imageSrc} />
                  <GameThumbnailTitle textAlign="center">
                    <b>{game.title}</b>{' '}
                    by {game.author}
                  </GameThumbnailTitle>
                  {!!game.link && (
                    <CenteredRow>
                      <BigButton href={game.link}>{game.linkTitle}</BigButton>
                    </CenteredRow>
                  )}
                </Column>
              ))}
            </Row>
          ))}
        </TransparentContainer>
        <BannerContainer>
          <WhiteBigTitle>Make your own game</WhiteBigTitle>
          <WhiteParagraph>
            With GDevelop, you too can create impressive games from scratch!
          </WhiteParagraph>
          <WhiteBigButton>Try it online</WhiteBigButton>
          <WhiteBigButton>Download</WhiteBigButton>
        </BannerContainer>
      </div>
    );
  }
}
