# Modernizr Webpack loader

## Installation

`npm install @skyrpex/modernizr-loader`

## Usage

This is just an example of usage. You can tweak it to suit your needs.

```js
// path/to/.modernizrrc.js
module.exports = {
  minify: false,
  options: [
    'hasEvent',
    'setClasses',
  ],
  'feature-detects': [
    'test/audio',
    'test/audio/preload',
    'test/history',
    'test/video',
    'test/video/autoplay',
    'test/video/preload',
  ],
};
```

```js
// webpack.config.js
const modernizrPath = path.resolve('path/to/.modernizrrc.js');

export default {
  // ...
  module: {
    loaders: [
      {
        test: modernizrPath,
        loader: '@skyrpex/modernizr',
      },
    ],
  },
  resolve: {
    alias: {
      modernizr: modernizrPath,
    },
  },
};
```
