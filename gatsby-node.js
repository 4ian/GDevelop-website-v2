const chalk = require('chalk');
const { createFilePath } = require('gatsby-source-filesystem');
const { getAllLocales, getLocaleMessages } = require('./i18n-helpers');

const locales = {
  en: { path: '', messages: {} },
};
getAllLocales().forEach(langCode => {
  let messages = getLocaleMessages(langCode);
  if (!messages) {
    console.log(chalk.red(`Unable to get messages for langCode=${langCode}`));
    messages = {};
  }

  locales[langCode] = { path: langCode, messages };
});
console.log(`${chalk.blue(Object.keys(locales).length)} locales loaded`);

exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;

  if (page.path.includes('404')) {
    return; // no need for localized 404 pages
  }

  return new Promise(resolve => {
    const pages = makeLocalizedPages(page);
    deletePage(page);
    pages.map(page => createPage(page));

    resolve();
  });
};

const makeLocalizedPages = page => {
  const pages = [];
  Object.keys(locales).map(lang => {
    const path = locales[lang]['path'] + page.path;

    pages.push({
      ...page,
      path,
      context: {
        localeCode: lang,
        localeMessages: {
          [lang]: {
            translation: locales[lang].messages,
          },
        },
      },
    });
  });

  return pages;
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
