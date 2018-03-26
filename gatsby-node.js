const chalk = require('chalk');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  getAllLocales,
  getLocaleMessages,
  getLocaleName,
} = require('./i18n-helpers');

const locales = {
  en: { name: 'English', path: '', messages: {} },
};
getAllLocales().forEach(langCode => {
  let messages = getLocaleMessages(langCode);
  if (!messages) {
    console.log(chalk.red(`Unable to get messages for langCode=${langCode}`));
    messages = {};
  }

  locales[langCode] = {
    path: langCode,
    name: getLocaleName(langCode),
    messages,
  };
});
console.log(`${chalk.blue(Object.keys(locales).length)} locales loaded`);

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  if (page.path.includes('choose-language')) {
    return new Promise(resolve => {
      deletePage(page);
      createPage(makeChooseLanguagePage(page));

      resolve();
    });
  } else {
    return new Promise(resolve => {
      const pages = makeLocalizedPages(page);
      deletePage(page);
      pages.map(page => createPage(page));

      resolve();
    });
  }
};

const makeLocalizedPages = page => {
  const pages = [];
  Object.keys(locales).map(lang => {
    const langPathPrefix = locales[lang]['path'];
    const path = langPathPrefix + page.path;

    pages.push({
      ...page,
      path,
      context: {
        localeCode: lang,
        localeMessages: {
          [lang]: {
            translation: {
              ...locales[lang].messages,
              LANG_PATH_PREFIX: langPathPrefix ? '/' + langPathPrefix : '',
              LANG_CODE: lang,
            },
          },
        },
      },
    });
  });

  return pages;
};

const makeChooseLanguagePage = page => {
  return {
    ...page,
    context: {
      localeCode: 'en',
      localeMessages: {
        en: {
          translation: {
            LANG_PATH_PREFIX: '',
            LANG_CODE: 'en',
          },
        },
      },
      localeNamesAndPaths: Object.keys(locales).map(lang => ({
        name: locales[lang].name,
        path: locales[lang].path,
      })),
    },
  };
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
