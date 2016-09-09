'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (config) {
  if (typeof this.cacheable === 'function') {
    this.cacheable();
  }

  var cb = this.async();

  _modernizr2.default.build(this.exec(config, this.resource), function (output) {
    cb(null, modulify(output));
  });
};

var _modernizr = require('modernizr');

var _modernizr2 = _interopRequireDefault(_modernizr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Expose Modernizr as a module.
var modulify = function modulify(output) {
  return ';(function (window) {\n    ' + output + ';\n    module.exports = window.Modernizr;\n  })({});';
};

module.exports = exports['default'];