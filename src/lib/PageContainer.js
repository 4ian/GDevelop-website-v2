import * as React from 'react';
import { I18n, I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Embed a page with i18n provider AND expose `t` function (as a render prop),
// so that pages can both use <Trans> component and `t` function.
const PageContainer = ({ children, localeCode, localeMessages }) => (
  <I18nextProvider
    i18n={i18n}
    initialLanguage={localeCode}
    initialI18nStore={localeMessages}
  >
    <I18n
      i18n={i18n}
      initialLanguage={localeCode}
      initialI18nStore={localeMessages}
    >
      {t => children(t)}
    </I18n>
  </I18nextProvider>
);

export default PageContainer;
