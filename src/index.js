import modernizr from 'modernizr';

// Expose Modernizr as a module.
const modulify = (output) => (
  `;(function (window) {
    ${output};
    module.exports = window.Modernizr;
  })({});`
);

export default function (config) {
  if (typeof this.cacheable === 'function') {
    this.cacheable();
  }

  const cb = this.async();

  modernizr.build(this.exec(config, this.resource), output => {
    cb(null, modulify(output));
  });
}
