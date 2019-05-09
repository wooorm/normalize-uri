'use strict'

module.exports = identity

try {
  normalize('')
  module.exports = normalize
} catch (error) {}

// Normalize `uri`.
function normalize(uri) {
  return encodeURI(decodeURI(uri))
}

/* istanbul ignore next - Fallback, return input. */
function identity(uri) {
  return uri
}
