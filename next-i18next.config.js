const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "es", "ar"],
  },
  localePath: path.resolve('./pages/locales'),
};
