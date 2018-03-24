import React from 'react';
import GatsbyLink from 'gatsby-link';
import { translate } from 'react-i18next';

const Link = ({ to, t, ...otherProps }) =>
  /^https?:\/\//.test(to) ? (
    <a href={to} {...otherProps} />
  ) : (
    <GatsbyLink to={t('LANG_PATH_PREFIX') + to} {...otherProps} />
  );

export default translate()(Link);
