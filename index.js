'use strict';

module.exports = normalize;

try {
  normalize('');
} catch (err) {
  module.exports = returner;
}

/* Normalize `uri`. */
function normalize(uri) {
  return encodeURI(decodeURI(uri));
}

/* Return input. */
function returner(uri) {
  return uri;
}
