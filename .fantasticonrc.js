const codepoints = require('./font/bootstrap-icons.json');

module.exports = {
  inputDir: './icons-ellevate', // (required)
  outputDir: './font', // (required)
  fontTypes: ['woff2', 'woff', 'ttf', 'eot', 'svg'],
  assetTypes: ['css', 'scss', 'json', 'html'],
  name: 'ellevate-icons',
  codepoints: codepoints,
  prefix: 'ei',
  selector: '.ei',
  fontsUrl: './fonts',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use a custom Handlebars template
  templates: {
    css: './build/font/css.hbs',
    scss: './build/font/scss.hbs',
    html: './build/font/html.hbs'
  },
  pathOptions: {
    json: './font/bootstrap-icons.json',
    css: './font/ellevate-icons.css',
    scss: './font/ellevate-icons.scss',
    html: './font/index.html',
    ttf: './font/fonts/ellevate-icons.ttf',
    woff: './font/fonts/ellevate-icons.woff',
    woff2: './font/fonts/ellevate-icons.woff2',
    eot: './font/fonts/ellevate-icons.eot'
  }
};
