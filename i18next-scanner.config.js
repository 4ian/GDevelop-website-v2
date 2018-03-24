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
    resource: {
      savePath: 'i18n/catalog.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false,
    keySeparator: false,
  },
};
