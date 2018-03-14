import React from 'react';
import Link from 'gatsby-link';
import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';
import BigButton from '../components/BigButton';
import BannerContainer from '../components/Containers/BannerContainer';
import TransparentContainer from '../components/Containers/TransparentContainer';
import WhiteBigTitle from '../components/WhiteBigTitle';
import WhiteParagraph from '../components/WhiteParagraph';
import WhiteBigButton from '../components/WhiteBigButton';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <TransparentContainer>
          <BigTitle>Create your own games</BigTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Paragraph>
          <BigButton>Try it online</BigButton>
          <BigButton>Download</BigButton>
          <BigTitle>Events - game creation for everyone</BigTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </Paragraph>
        </TransparentContainer>
        <BannerContainer>
          <WhiteBigTitle>Create your own games</WhiteBigTitle>
          <WhiteParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </WhiteParagraph>
          <WhiteBigButton>Try it online</WhiteBigButton>
        </BannerContainer>
      </div>
    );
  }
}

//TODO: remove?
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
