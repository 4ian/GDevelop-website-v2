import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../lib/PageContainer';
import BigTitle from '../components/BigTitle';
import Paragraph from '../components/Paragraph';
import TransparentContainer from '../components/Containers/TransparentContainer';
import Spacer from '../components/Grid/Spacer';

const NotFoundPage = props => (
  <PageContainer {...props.pathContext}>
    {t => (
      <React.Fragment>
        <Helmet title="GDevelop - Page not found" />
        <Navbar t={t} noTransparency />
        <Spacer height="300px" />
        <TransparentContainer>
          <BigTitle>Oops, looks like this page does not exist</BigTitle>
          <Paragraph>
            If you believe this is a mistake, please send us a message :)
          </Paragraph>
          <Paragraph>Use the menu to navigate on GDevelop website.</Paragraph>
        </TransparentContainer>
        <Spacer height="500px" />
        <Footer t={t} />
      </React.Fragment>
    )}
  </PageContainer>
);

export default NotFoundPage;
