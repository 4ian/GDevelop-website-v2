const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'i18n');

const getAllLocales = () =>
  fs.readdirSync(i18nPath).map(filename => filename.replace('.json', ''));

const getLocaleMessages = langCode => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(i18nPath, langCode + '.json'), 'utf8')
    );
  } catch (e) {
    return null;
  }
};

module.exports = {
  getAllLocales,
  getLocaleMessages,
};
