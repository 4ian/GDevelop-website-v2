// This configures i18next-scanner to extract every translation to i18n/catalog.json
module.exports = {
  options: {
    // debug: true,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx'],
    },
    lngs: ['en'],
    ns: ['translation'],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: (lng, ns, key) => {
      if (lng === 'en') {
        // Return key as the default value for English language
        return key;
      }

      // Return the string '__NOT_TRANSLATED__' for other languages
      return '__NOT_TRANSLATED__';
    },
    resource: {
      savePath: 'i18n/catalog.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false,
    keySeparator: false,
    removeUnusedKeys: true,
  },
};
