/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "zh-TW", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src/"],
    },
  ],
};
