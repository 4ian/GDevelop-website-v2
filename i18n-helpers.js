const fs = require('fs');
const path = require('path');
const ISO6391 = require('iso-639-1');

const i18nPath = path.join(__dirname, 'i18n');

const getAllLocales = () =>
  fs
    .readdirSync(i18nPath)
    .map(filename => filename.replace('.json', ''))
    .filter(langCode => langCode !== 'catalog');

const getLocaleMessages = langCode => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(i18nPath, langCode + '.json'), 'utf8')
    );
  } catch (e) {
    return null;
  }
};

const getLocaleName = langCode => ISO6391.getName(langCode);

module.exports = {
  getAllLocales,
  getLocaleMessages,
  getLocaleName,
};
