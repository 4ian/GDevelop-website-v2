import React from 'react';
import GatsbyLink from 'gatsby-link';
import { translate } from 'react-i18next';
import { trackEvent } from '../lib/analytics';

const Link = ({
  to,
  t,
  noLangPathPrefix,
  category,
  action,
  label,
  ...otherProps
}) =>
  /^https?:\/\//.test(to) ? (
    <a
      href={to}
      onClick={() => {
        if (category && label)
          trackEvent({
            category,
            label,
            action: action || 'click',
            t,
          });
      }}
      {...otherProps}
    />
  ) : (
    <GatsbyLink
      to={(noLangPathPrefix ? '' : t('LANG_PATH_PREFIX')) + to}
      {...otherProps}
    />
  );

export default translate()(Link);
