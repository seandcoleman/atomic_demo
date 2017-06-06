'use strict'
const path = require('path')

module.exports = {
  port: 3000,
  title: 'React-Semantic.UI-Starter',
  publicPath: process.env.BUILD_DEMO ? '/react-semantic.ui-starter/' : '/',
  srcPath: path.join(__dirname, './../common'),
  // add these dependencies to a standalone vendor bundle
  vendor: [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'react-router-redux',
    'redux-thunk',
    'semantic-ui-react',
    'whatwg-fetch',
    'semantic-ui-css/semantic.css',
    'offline-plugin/runtime',
    'prop-types'
  ],
  // your web app's manifest.json
  manifest: {
    name: 'Atomic',
    short_name: 'Atomic',
    description: '',
    icons: [
      {
        src: 'images/touch/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png'
      },
      {
        src: 'images/touch/apple-touch-icon.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        src: 'images/touch/chrome-touch-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }
    ],
    start_url: '.',
    display: 'standalone',
    background_color: '#f7f7f7',
    theme_color: '#1b1c1d'
  }
}
