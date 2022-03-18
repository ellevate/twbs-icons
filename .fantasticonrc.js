'use strict'

const codepoints = require('./font/bootstrap-icons.json')

module.exports = {
  inputDir: './icons-ellevate', // (required)
  outputDir: './font-ellevate', // (required)
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
    css: './build/font-ellevate/css.hbs',
    scss: './build/font-ellevate/scss.hbs',
    html: './build/font-ellevate/html.hbs'
  },
  pathOptions: {
    json: './font-ellevate/ellevate-icons.json',
    css: './font-ellevate/ellevate-icons.css',
    scss: './font-ellevate/ellevate-icons.scss',
    html: './font-ellevate/index.html',
    ttf: './font/fonts/ellevate-icons.ttf',
    woff: './font-ellevate/fonts/ellevate-icons.woff',
    woff2: './font-ellevate/fonts/ellevate-icons.woff2',
    eot: './font-ellevate/fonts/ellevate-icons.eot'
  }
}
