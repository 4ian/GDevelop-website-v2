import * as React from 'react';
import { I18n } from 'react-i18next';
import i18n from './i18n';

const TranslatableView = ({ children, localeCode, localeMessages }) => (
  <I18n
    i18n={i18n}
    initialLanguage={localeCode}
    initialI18nStore={localeMessages}
  >
    {t => children(t)}
  </I18n>
);

export default TranslatableView;
