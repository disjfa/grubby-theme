const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('site/build/')
  .setPublicPath('/grubby-theme/build')
  .addEntry('grubby-theme', './js/grubby-theme.js')
  .addEntry('grubby-admin', './js/grubby-admin.js')
  .setManifestKeyPrefix('build/')
  .enableSassLoader()
  .autoProvidejQuery()
  .enablePostCssLoader()
  .enableSourceMaps(!Encore.isProduction())
;
if (Encore.isProduction()) {
  Encore
    .cleanupOutputBeforeBuild()
  ;
}

module.exports = Encore.getWebpackConfig();
